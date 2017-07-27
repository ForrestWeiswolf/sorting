function bubbleSort(arr) {
  var newArr = [];
  var trigger = true;

  while (trigger) {
    trigger = false
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i+1]) {
        newArr.push(arr[i])
      } else {
        trigger = true
        newArr.push(swap(arr[i], arr[i + 1]));
        arr[i + 1] = arr[i]
      }
    }
    if (arr[0]) newArr.push(arr[arr.length -1])
    arr = newArr
  }
  return newArr
}

function swap(num1, num2) {
  return num2

}
