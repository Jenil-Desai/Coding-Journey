let num = prompt("Enter Number : ");
num = parseInt(num);
let count=0;

while (num!=0) {
    num=Math.floor(num/10);
    count++;
}

alert(`Total Length of Number is ${count}`);