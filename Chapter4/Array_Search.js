// document.write(`
//     <div>
//         <h1>Search Element in Array</h1>
//         <ul>
//             <li>Understand Case and solution with Whiteboard</li>
//             <li>Make Array</li>
//             <li>Use Loop to Search element</li>
//             <li>Search element with text input and button</li>
//         </ul>
            
//         <ol>
//             <li>Shortcut for Search element(Default function)</li>
//             <li>Shortcut for delete element(Default function)</li>
//         </ol>
//         <hr>
//     </div>
// `)

let Arr2 = [12, 53, 22, 98, 73];
let Arr1 = [12, 53, 22, 98, 73];
let item = 98;


for (i = 0; i < Arr1.length; i++){
    if(Arr1[i] === item){
        break
    }
}

// console.log(Arr1.indexOf(73))
// document.write(Arr1)
function findEl(){
    let element = Number(document.getElementById("Number").value)
    for(let i = 0; i < Arr1.length; i++){
        if(Arr1[i] === element){
            // document.write(i)
            break
        }else if (i === Arr1.length-1 && Arr1[i] !== element){
            alert("There's no such element in the Array")
        }

    }
}


Arr2.splice(2,1)
// console.log(Arr2)


let data = [1,8,3,4,6,10,7,9,5,2]
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data.length; j++){
        if(data[j] > data[j+1]){
            let temp = data[j];
            data[j] = data[j+1]
            data[j+1] = temp
        }
    }
}
console.log(data)