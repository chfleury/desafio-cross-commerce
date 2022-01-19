const mockedEtl = require('../mocks/etlMock');

const { createSortedTinyArray } = require('../fakes/fakeData');

describe('Etl', () => {
  test('should sucessfuly handleEtl', async () => {
    await mockedEtl.handleEtl();
    expect(mockedEtl.state).toEqual({
      isExtractionComplete: true,
      pagesSucessfulyExtracted: 1,
      pagesIterated: 1,
      data: createSortedTinyArray(),
    });
  });

  test('should return error if a function inside throws', async () => {
    jest.spyOn(mockedEtl, 'extract').mockImplementationOnce(() => {
      throw new Error();
    });

    await mockedEtl.handleEtl();

    expect(mockedEtl.state).toEqual({
      error: new Error(),
    });
  });
});
