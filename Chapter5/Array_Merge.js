// document.write(`
//     <div>
//         <h1>Merge Arrays</h1>
//         <ul>
//             <li>Understand issue and solution with Whiteboard</li>
//             <li>Make three arrays</li>
//             <li>Use 2 different Loop to Merge element</li>
//         </ul>
//         <ol>
//             <li>Shortcut for Reverse Array Element(Default Function)</li>
//             <li>Shortcut for Merge Array(Default Function)</li>
//         </ol>
//     </div>
//     <hr>
// `)


let Arr_1 = [28, 32, 51, 99, 63, 22, 79]
let Arr_2 = [17, 93, 29, 62, 33, 13, 58]
let Arr_3 = [];

for (let pos = 0; pos < Arr_1.length; pos++){
    Arr_3[pos] = Arr_1[pos];
}
for (let pos = 0; pos < Arr_2.length; pos++){
    Arr_3[Arr_1.length + pos] = Arr_2[pos]
}

// console.warn(Arr_3)


let Arr_4 = [...Arr_1, ...Arr_2, ...Arr_3]
// console.log(Arr_4)

// console.log(Arr_4.reverse())
let Arr_5 = [];

// Forward loop
for (pos = 0; pos < Arr_1.length; pos++){
    Arr_5[Arr_1.length - 1 - pos] = Arr_1[pos];
}


// Reverse loop
// for (let pos = Arr_1.length -1 ; pos >= 0; pos--){
//     Arr_5[pos] = Arr_1[Arr_1.length - pos -1];
// }

console.log(Arr_5)