let data = [89, 33, 2, 92, 25, 78, 67, 51, 51, 21, -91, 11, 9, 49, 10, 0.1, 0]

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data.length; j++){
        if(data[j] > data[j+1]){
            let temp = data[j]
            data[j] = data[j+1]
            data[j+1] = temp 
        }
    }
}

console.log(data)

