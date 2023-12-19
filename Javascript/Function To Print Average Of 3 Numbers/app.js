let num1 = prompt(`Enter 1st Number : `);
let num2 = prompt(`Enter 2nd Number : `);
let num3 = prompt(`Enter 3rd Number : `);

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

function avg(a,b,c){
    return (a+b+c)/3;
}

console.log(`Average : ${avg(num1,num2,num3)}`);
alert(` Average : ${avg(num1,num2,num3)}`);