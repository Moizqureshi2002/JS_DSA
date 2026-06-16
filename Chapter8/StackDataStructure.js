let data = []
document.write(data)
console.log(data)
let max = 10;

function push(){
    let newValue = Number(document.getElementById("NewVal").value)
    if(data.length < max){
        data[data.length] = newValue
    }else{
        alert(`Can't add these values ${newValue}, stack is full!!`)
        console.log(`Can't add these values ${newValue}, stack is full!!`)
    }
    document.getElementById("NewVal").value = null
    // document.write(data)
    console.log(data)
}

function pop(){
    if(data.length>0){
        data.length = data.length-1
    }
    else{
        console.log(`The array is empty. Nothing to pop`)
    }
    console.log(data)
}
// console.log(data)
// document.write(data)
// push(10)
// push(20)
// push(30)
// push(40)
// push(50)
// console.log(data)
// pop()
// pop()
// console.log(data)