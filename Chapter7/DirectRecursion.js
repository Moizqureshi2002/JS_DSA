// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(4))
// let data = 1;
// for (let index = 4; index > 0 ; index--) {
//     data = data * index;    
//     console.log(data)
// }
// console.log(data)

// 0, 1, 1, 2, 3, 5, 8, 13, 21...
    // let n = 3;
    // let init = 0;
    // let next = 1;
    // let result= 0;
    // let data = [];

    // for (let i = 0; i < n; i++){
    //     result = init
    //     next = init + next
    //     init = next - init
    //     data[i] = result
    //     // console.log(result)
    // }
    // console.log(data); 


// function PrintNumbersDesc(n){
//     if(n>0){
//         console.log(n)
//         n = n-1;
//         PrintNumbersDesc(n)
//     }
// }
// PrintNumbersDesc(5)


// function PrintNumbersAsc(n){
//     if(n == 0){
//         console.log(n)
//         return;
//     }

//     PrintNumbersAsc(n - 1);
//     console.log(n)
// }
// PrintNumbersAsc(5)

// function test(x){
//     if(x>1){
//         test(x-1)
//     }
//     console.log(x)
// }

// test(5)

// function sum(x){
//     if(x===1){
//         return 1;
//     }
//     return x + sum(x-1)
// }
// console.log(sum(5))


// function factorial(x){
//     if(x===0){
//         return 1;
//     }
//     return x * factorial(x-1)
// }
// console.log(factorial(5))

// function fib(n){
//     if(n <= 1){
//         return n;
    
//     }

//     return fib(n-1)+fib(n-2)
// }

// console.log(fib(4))

// function power(number, exponent){
//     if(exponent == 0){
//         return 1;
//     } else if (number == 0){
//         return 0;
//     } else if (exponent === 1){
//         return number;
//     }
    
//     return number*power(number, exponent -1)

// }

// console.log(power(10, 3))


// function countUp(x){
//     if(x==0){
//         return ;
//     }
//     countUp(x-1)
//     console.log(x)
// }
// countUp(5)


// function countDown(x){
//     if(x == 0){
//         return;
//     }
//     console.log(x)
//     return countDown(x-1)
// }
// countDown(5)

// function countDown(x){
//     if(x>1){
//         countDown(x-1)
//     }
//     console.log(x)
// }
// countDown(5)


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