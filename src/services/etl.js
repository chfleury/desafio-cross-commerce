const axios = require('axios');
const res = require('express/lib/response');
const MergeSort = require('../algorithms/mergeSort');

class Etl {
  constructor() {
    this.state = {
      isExtractionComplete: false,
      pagesSucessfulyExtracted: 0,
      pagesIterated: 0,
      data: [],
    };
  }

  async handleEtl() {
    try {
      let data = await this.extract();

      this.transform(data);

      this.load(data);
    } catch (err) {
      this.state = { error: err };
    }
  }

  async extract() {
    let _this = this;
    let page = 1;
    let pagesSucessfulyExtracted = 0;
    const url = 'http://challenge.dienekes.com.br/api/numbers';
    let done = false;
    let extractedData = [];

    while (!done) {
      await axios
        .get(url + `?page=${page}`)
        // if the request succeeds
        .then(function (response) {
          if (response.data.numbers.length == 0) {
            done = true;
          } else {
            pagesSucessfulyExtracted += 1;

            extractedData = [...extractedData, ...response.data.numbers];

            _this.state.pagesIterated = page;
            _this.state.pagesSucessfulyExtracted = pagesSucessfulyExtracted;
            console.log(_this.state);
          }
        })

        // if the request fails
        .catch(function (error) {
          _this.state.pagesIterated = page;
          console.error(error);
        })

        // On success or error, iterates the page every time
        .then(function () {
          page += 1;
        });
    }

    return extractedData;
  }

  transform(data) {
    MergeSort.sort(data);
  }

  load(data) {
    this.state.isExtractionComplete = true;
    this.state.data = data;
  }
}

module.exports = new Etl();
