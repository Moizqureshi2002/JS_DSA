let arr = [];
let size = arr.length;
// console.log(arr)
function push(x){
    arr[size] = x;
    size = size + 1;
    // console.log(arr);
}

function pop(){
    let removedItem = arr[size-1]
    size = size - 1
    arr.length = size;
    // console.log(arr)
    return removedItem;
}

function reverseString(item){
    for(let i = 0; i< item.length; i++){
        push(item[i])
        // console.log(item)
    }
    for(let i = 0; i< item.length; i++){
        item[i] = pop()
    }
    return item.join("")
}

let str = "Moiz"
let data = str.split("")
reverseString(data)
console.log(data.join(''))
console.log(data)
// push(20)
// push(25)
// push(30)
// pop()
// pop()
// pop()

