let cars = ['Ford', 'Ferrari', 'Tata', 'Honda', 'Kia', 'MG'];

let num = prompt(`Enter Number : `);
num = parseInt(num);
num+=1;

function large(num){
    return cars.slice(num);
}

console.log(`Array Elements : ${large(num)}`);