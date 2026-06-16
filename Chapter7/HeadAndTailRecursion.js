// Head Recursion
function ex1(x){
    if(x>0){
        ex1(x-1)
    }
    console.log(x)
}
ex1(5)          // output: 0 1 2 3 4 5


// Tail Recursion
function ex2(x){
    console.log(x)
    if(x>0){
        ex2(x-1)
    }
}
ex2(5)          // output: 5 4 3 2 1 0