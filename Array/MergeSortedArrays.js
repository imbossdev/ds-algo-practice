function mergeSortedArrays(arr1, arr2) {
  resultArray = [];
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;
  let run = true;
  let firstArrayItem = arr1[firstArrayIndex];
  let secondArrayItem = arr2[secondArrayIndex];

  while (run) {
    if (firstArrayIndex < arr1.length && secondArrayIndex < arr2.length) {
      firstArrayItem = arr1[firstArrayIndex];
      secondArrayItem = arr2[secondArrayIndex];

      if (firstArrayItem < secondArrayItem) {
        resultArray.push(firstArrayItem);
        firstArrayIndex++;
      } else {
        resultArray.push(secondArrayItem);
        secondArrayIndex++;
      }
    } else if (firstArrayIndex < arr1.length) {
      resultArray.push(arr1[firstArrayIndex]);
      firstArrayIndex++;
    } else if (secondArrayIndex < arr2.length) {
      resultArray.push(arr2[secondArrayIndex]);
      secondArrayIndex++;
    } else {
      run = false;
    }
  }
  return resultArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
console.log(mergeSortedArrays([0, 5, 9, 99, 104], [30, 35, 42]));
console.log(mergeSortedArrays([0, 5, 9, 99, 104], []));
console.log(mergeSortedArrays([], []));
