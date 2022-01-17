class MergeSort {
  sort(array) {
    let len = array.length;

    for (let size = 1; size < len; size = 2 * size) {
      for (let left = 0; left < len - 1; left += 2 * size) {
        let mid = Math.min(left + size - 1, len - 1);

        let right = Math.min(left + 2 * size - 1, len - 1);

        this.merge(array, left, mid, right);
      }
    }
  }

  merge(array, left, middle, right) {
    let i = left;
    let j = middle + 1;

    let mergedArray = [];

    while (i <= middle && j <= right) {
      if (array[i] < array[j]) {
        mergedArray.push(array[i]);
        i += 1;
      } else {
        mergedArray.push(array[j]);
        j += 1;
      }
    }

    for (; i <= middle; i++) {
      mergedArray.push(array[i]);
    }
    for (; j <= right; j++) {
      mergedArray.push(array[j]);
    }

    mergedArray.forEach((e) => {
      array[left] = e;
      left += 1;
    });
  }
}

module.exports = new MergeSort();
