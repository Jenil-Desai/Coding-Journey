let num = prompt("Enter Any Number To Be Deleted From Array : ");
let arr = [1,2,3,4,5,6,2,3];

for (let i = 0; i < arr.length; i++) {
    if (num==arr[i]) {
        arr.splice(i,1);
    }
}

alert(`Finale Array ${arr}`);