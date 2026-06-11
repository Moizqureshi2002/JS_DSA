// document.write(`
//     <div>
//         <h1>Insert Element in Array</h1>
//         <ul>
//             <li>Understand issue and solution with Whiteboard</li>
//             <li>Make array, define the position.</li>
//             <li>Use Loop to delete element</li>
//             <li>Delete element with textand button.</li>
//         </ul>
//     </div>
//     <hr>
// `)

let data = [20, 38, 2, 44, 81, 92]  // index= 0 to 5 & length = 6 
// document.write(`data = [${data}] <br><br>`)
function deleteEl(){
    let position = Number(document.getElementById("position").value);
    for (let i = position; i< data.length-1; i++){
        data[i] = data[i+1]
    }
    data.length = data.length - 1;
    
    console.warn(data)
}



for (let pos = 0; pos < data.length; pos++){
    data[pos] = data[pos+1]
}
data.length= data.length-1
console.log(data)


for (let pos = 1; pos < data.length; pos++){
    data[pos] = data[pos+1]
}
data.length = data.length - 1;
console.log(data)

for (let pos = data.lenght-1; pos < data.length; pos++){
    data[pos] = data[pos+1]
}
data.length = data.length - 1;
console.log(data)
for (let pos = data.lenght-1; pos < data.length; pos++){
    data[pos] = data[pos+1]
}
data.length = data.length - 1;
console.log(data)
