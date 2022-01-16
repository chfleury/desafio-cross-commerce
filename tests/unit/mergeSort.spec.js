const mergeSort = require('../../src/functions/mergeSort');
jest.mock('../../src/functions/mergeSort');

describe('Merge Sort', () => {
  test('should call mergeSort function with correct parameters', () => {
    const params = [1.3, 4.3, 41.4, 5.154];
    mergeSort(params);
    expect(mergeSort).toHaveBeenCalledWith(params);
  });
});
