document.write(`
    <div>
        <h1>Insert Element in Array</h1>
        <ul>
            <li>Understand issue and solution with Whiteboard</li>
            <li>Make array, define the position.</li>
            <li>Use loop to insert new element</li>
            <li>Insert element with text input and button</li>
            <li>Insert element with a default function</li>
        </ul>
    </div>
    <hr>
`)

let data = [0, 10, 20, 30, 40, 60, 70, 80];  // length = 8
let newEl = 50;
let position = 5;
for (i = data.length - 1; i>= 0; i--){
    if (i >= position){
        data[i + 1] = data[i]  // length = 9
        // output = [0, 10, 20, 30, 40, 60, 60, 70, 80]


        if (i == position){
            data[i] = newEl
            // output = [0, 10, 20, 30, 40, 50, 60, 70, 80]
        }
    }
}


for (i = data.length - 1; i >= 0; i--){
    if (i >= 1) {
        data[i+1] = data[i]
        if(i == 1){
            data[i] = 5;
        }
    }

}

for (i = data.length - 1; i >= 0; i--){
    if(i >= 3){
        data[i+1] = data[i]
        if(i == 3){
            data[i] = 15;
        }
    }
}
// document.write(data, "<br>")
// document.write(data.length, "<br>")

for (i = data.length - 1; i >= 0; i--){
    if(i>=5){
        data[i+1] = data[i]
        if((i == 5)){
            data[i] = 25
        }
    }
}
// document.write(data, "<br>")

for (position = data.length - 1; position >= 0; position--){
    if(position >= 7){
        data[position + 1] = data[position]
        if(position == 7){
            data[position] = 35;
        }
    }
}

for (position = data.length - 1; position >= 0; position--){
    if(position >= 9){
        data[position + 1] = data[position]
        if(position == 9){
            data[position] = 45;
        }
    }
}
// console.log(data)


for (position = data.length - 1; position >=0; position--){
    if(position >= 11){
        data[position+1] = data[position];
        if (position == 11) {
            data[position] = 55;
        }
    }
}

for (position = data.length - 1; position >= 0; position--){
    if(position >= 13){
        data[position + 1] = data[position];
        if(position == 13){
            data[position] = 65;
        }

        console.log(data)
    }
}
// console.log(data)

for (position = data.length-1; position>=0; position--){
    if(position>=15){
        data[position + 1] = data[position]
        if(position == 15){
            data[position] = 75;
        }
    }
}
// console.log(data)

for (position = data.length-1; position >= 0; position--){
    if(position == 16){
        data[position + 1] = 85
    }
}
// console.log(data)

// document.write(data,"<br>")
function insertEl(){
    let newData = [1, 23, 44, 54, 21, 78]
    let position = Number(document.getElementById("position").value)
    let newElement = document.getElementById("new_element").value;
    for(i = newData.length - 1; i >= 0; i--){
        // if(i == newData.length-1){
        //     newData[i+1] = newElement;
        // }
        // else 
        if(i >= position ){
            newData[i+1] = newData[i]
                if(i==position){
                    newData[i] = newElement;
                }
        }
    }
    document.write(newData)
}

data.splice(2, 0, 7)
console.log(data)