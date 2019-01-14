function split(wholeArray) {
  const firstHalf = wholeArray.slice( 0, Math.floor(wholeArray.length/2));
  const secondHalf = wholeArray.slice( firstHalf.length);
  return [firstHalf, secondHalf];
}
function merge( sortedArray1, sortedArray2){
  let outputArray = [];
  while ( sortedArray1.length !== 0 && sortedArray2.length !== 0){
    if ( sortedArray1[0] < sortedArray2[0]) {
      outputArray.push( sortedArray1.shift());
    } else {
      outputArray.push( sortedArray2.shift());
    }
  }
  outputArray = outputArray.concat( sortedArray1, sortedArray2);
  return outputArray;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  const splitArray = split(array);
  let firstHalf = mergeSort(splitArray[0]);
  let secondHalf = mergeSort(splitArray[1]);

  return merge(firstHalf, secondHalf);
}


