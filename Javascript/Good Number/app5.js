let num = prompt("Enter any number : ");
num = parseInt(num);
if (num%10==0) {
    alert(`${num} is Good Number.`);
}
else{
    alert(`${num} is Bad Number.`);
}