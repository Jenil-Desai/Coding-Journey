let num1 = prompt("Enter Number [1]:");
let num2 = prompt("Enter Number [2]:");
let rm1;
let rm2;

rm1=num1%10;
rm2=num2%10;

if (rm1===rm2) {
    alert("Both Are Same");
}
else{
    alert("Both Are Not Same");
}
