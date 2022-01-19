const MergeSort = require('../../src/algorithms/mergeSort');
const {
  createSortedTinyArray,
  createSortedLargeArray,
  createTinyArray,
  createLargeArray,
} = require('../fakes/fakeData');

describe('Merge Sort', () => {
  test('should call sort function with correct parameters', () => {
    const sortSpy = jest.spyOn(MergeSort, 'sort');
    const params = createTinyArray();

    MergeSort.sort(params);

    expect(sortSpy).toHaveBeenCalledWith(params);
  });

  test('should sucessfuly sort the array', () => {
    let testOne = createTinyArray();
    let testTwo = createLargeArray();

    MergeSort.sort(testOne);
    MergeSort.sort(testTwo);

    expect(testOne).toEqual(createSortedTinyArray());
    expect(testTwo).toEqual(createSortedLargeArray());
  });

  test('should call merge function with correct parameters', () => {
    const mergeSpy = jest.spyOn(MergeSort, 'merge');
    const params = createSortedTinyArray();

    MergeSort.merge(params, 0, 1, 3);

    expect(mergeSpy).toHaveBeenCalledWith(params, 0, 1, 3);
  });

  test('should sucessfuly merge the arrays', () => {
    let array = createSortedTinyArray();
    array = [...array, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    MergeSort.merge(array, 0, 3, 13);

    expect(array).toEqual([
      1, 1.3, 2, 3, 4, 4.3, 5, 5.154, 6, 7, 8, 9, 10, 41.4,
    ]);
  });
});
