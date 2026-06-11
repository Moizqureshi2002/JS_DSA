
document.write(`
        <div>
            <h1>Array Traversing and Accessing</h1>
            <ul>
                <li>Make HTML Page write Basic Array</li>
                <li>Traversing with loop</li>
                <li>Accessing elements</li>
                <li>Access element with text input and button</li>
                <li>Validations</li>
            </ul>
        </div>
        <hr>
    `)

let Arr_1 = [12, 11, 1, 45, 5, 49, 22];

document.write(`Arr_1 = [${Arr_1}]<br><br>`)

    for (let i = 0; i < Arr_1.length; i++)
    {
        document.write(`Array ${i} is ${Arr_1[i]} <br>`)
        console.log(i)
    }
        

document.write(`<hr><br><br><hr>`)


document.write(`The lenth of the array is ${Arr_1.length}.`)


document.write(`<hr><br><br><hr>`)


document.write(Arr_1[3])

document.write(`<br> <br>`)

document.write(Arr_1[5])

document.write(`<br> <br>`)

document.write(Arr_1[2])

document.write(`<br> <br>`)

document.write(Arr_1[6])

document.write(`<br> <br>`)

document.write(Arr_1[0])

document.write("<br> <br>")

document.write(Arr_1[4])

document.write(`<br><br>`)

document.write(Arr_1[1])


document.write(`<hr> <br> <br> <hr>`)

let x = 5
let y = 3
let z = 6

document.write(Arr_1[x])

document.write(`<br><br>`)

document.write(Arr_1[y])

document.write(`<br><br>`)

document.write(Arr_1[z])


document.write(`<hr> <br> <br> <hr>`)

const data = ["John", "Bob", "Charlie", "Chloe", "Sarah", "Tom"]

document.write(`data = [${data}] <br><br>`)


function getElement(){
    let elmnt = Number(document.getElementById("element").value);
    if (Number.isNaN(elmnt) || !Number.isInteger(elmnt) || elmnt < 0 ){
        alert("Please add a positive integer!!!")
    }
    else if(elmnt < data.length && elmnt >= 0){
        alert(`Function Call ${data[elmnt]} and the type of the data is ${typeof(data[elmnt])}`);
    }
    else{
        alert(`The input entered exceeds the length of Array.\n \n Please enter an integer below ${data.length}`)
    }
}