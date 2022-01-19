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
    let retry = 0;

    while (!done) {
      await axios
        .get(url + `?page=${page}`)
        // if the request succeeds
        .then(function (response) {
          if (response.data.numbers.length == 0) {
            // if the content is empty array, it stops extracting the data
            done = true;
          } else {
            pagesSucessfulyExtracted += 1;

            extractedData = [...extractedData, ...response.data.numbers];
            _this.state.pagesIterated = page;
            _this.state.pagesSucessfulyExtracted = pagesSucessfulyExtracted;
          }

          page += 1;
          retry = 0;
        })

        // if the request fails, it retries up to 5 times
        .catch(function (error) {
          if (retry > 5) {
            page += 1;
            retry = 0;
          }

          retry += 1;

          _this.state.pagesIterated = page;
        });
    }

    return extractedData;
  }

  transform(data) {
    MergeSort.sort(data);
  }

  load(data) {
    // updates the state with the new transformed data
    this.state.isExtractionComplete = true;
    this.state.data = data;
  }
}

module.exports = new Etl();
