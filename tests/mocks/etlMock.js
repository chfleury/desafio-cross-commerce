const etl = require('../../src/services/etl');

const { createTinyArray } = require('../fakes/fakeData');

jest.spyOn(etl, 'extract').mockImplementationOnce(async () => {
  etl.state.pagesIterated = 1;
  etl.state.pagesSucessfulyExtracted = 1;
  return new Promise((resolve, _reject) => resolve(createTinyArray()));
});

jest.spyOn(etl, 'load').mockImplementationOnce(async (data) => {
  etl.state.isExtractionComplete = true;
  etl.state.data = data;
});

module.exports = etl;
