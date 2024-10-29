function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
  return arr;
}

// console.log(swap([1,2,3], 0, 1));

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; ++j) {
    if (arr[j] < pivot) {
      ++i;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

// const arr = [7, 2, 1, 6, 8, 5, 3, 4]
// console.log(partition(arr, 0, 7))

function quickSort(arr, low, high) {
  if (low < high) {
    let p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
}

let a = [10, 4, 5, 7, 12, 8, 13, 20, 4, 1, 4, 2, 3];
quickSort(a, 0, a.length - 1);
console.log(a);
