function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // An array with 0 or 1 elements is already sorted
  }

  const pivot = arr[0]; // Choose the first element as the pivot
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right sub-arrays and combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
