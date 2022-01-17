const axios = require('axios');
const res = require('express/lib/response');
const MergeSort = require('../algorithms/mergeSort');

class Etl {
  constructor() {
    this.state = {
      isExtractionComplete: false,
      pagesExtracted: 0,
      data: [],
    };
  }

  async handleEtl() {
    let data = await this.extract();

    this.transform(data);

    this.load(data);
  }

  async extract() {
    let _this = this;
    let page = 1;
    let pagesSucessfulyExtracted = 0;
    const url = 'http://challenge.dienekes.com.br/api/numbers';

    let data = [];
    let done = false;
    while (!done) {
      await axios
        .get(url + `?page=${page}`)
        .then(function (response) {
          if (response.data.numbers.length == 0) {
            done = true;
          } else {
            pagesSucessfulyExtracted += 1;

            data = [...data, ...response.data.numbers];

            _this.state = {
              isExtractionComplete: false,
              pagesIterated: page,
              pagesSucessfulyExtracted,
              data: [],
            };

            console.log(_this.state);
          }
        })
        .catch(function (error) {
          console.log('error');
        })
        .then(function () {
          page += 1;
        });
    }

    return data;
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
