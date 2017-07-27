function bubbleSort(arr) {
  var trigger = true;

  while (trigger) {
    trigger = false
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        trigger = true;
        swap(i, arr);
      }
    }
  }
  return arr
}

function swap(i, arr) {
   var tmp = arr[i];
   arr[i] = arr[i + 1];
   arr[i + 1] = tmp;
}
