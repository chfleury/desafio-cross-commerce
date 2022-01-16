const axios = require('axios');
const { mergeSort } = require('../functions/mergeSort');

class Etl {
  constructor() {
    this.state = {
      isExtractionComplete: false,
      pagesExtracted: 0,
      data: [],
    };
  }

  async extract() {
    let _this = this;
    let page = 1;
    let pagesSucessfulyExtracted = 0;
    const url = 'http://challenge.dienekes.com.br/api/numbers';
    let data = [];

    while (true) {
      await axios
        .get(url + `?page=${page}`)
        .then(function (response) {
          if (response.data.numbers.lenght === 0) {
            return data;
          }

          pagesSucessfulyExtracted += 1;

          data = [...data, ...response.data.numbers];

          _this.state = {
            isExtractionComplete: false,
            pagesIterated: page,
            pagesSucessfulyExtracted,
            data: [],
          };

          console.log(_this.state);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          page += 1;
        });
    }
  }

  transform(data) {
    return mergeSort(data);
  }

  load(data) {
    this.updateState();
  }
}

module.exports = new Etl();
