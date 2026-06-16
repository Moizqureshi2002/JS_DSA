let data = [1, 2, 3, 4, 5];
function Reverse(arr, first, last) {
    console.log(arr)
    if (first <= last) {
        let temp;
        temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        Reverse(arr, first + 1, last - 1);
    }
}
Reverse(data, 0, data.length - 1);

console.log(data.reverse())  // Default function
