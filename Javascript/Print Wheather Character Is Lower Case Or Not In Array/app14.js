let str = prompt("Enter any Sentence:");
let index = prompt("Enter Index No: ");
index = parseInt(index);

if (str[index]==str[index].toLowerCase()) {
    alert("The character is lower case.");
} else {
    alert("The character is upper case.");
}