const MergeSort = require('../../src/functions/mergeSort');

describe('Merge Sort', () => {
  // test('should call mergeSort function with correct parameters', () => {
  //   const params = [1.3, 4.3, 41.4, 5.154];
  //   mergeSort(params);
  //   expect(mergeSort).toHaveBeenCalledWith(params);
  // });

  test('should sucessfuly sort the array', () => {
    let array = [1.3, 4.3, 41.4, 5.154];

    MergeSort.sort(array);

    expect(array).toEqual([1.3, 4.3, 5.154, 41.4]);
  });
});
