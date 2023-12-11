let num1 = prompt("Enter Number [1]:");
let num2 = prompt("Enter Number [2]:");
let num3 = prompt("Enter Number [3]:");
let max = 0;

if (num1 > max) {
    max = num1;
}

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}

alert(`${max} is largest Number.`);