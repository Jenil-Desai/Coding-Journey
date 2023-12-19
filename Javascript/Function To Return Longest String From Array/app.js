let max = prompt(`Enter Max Elements :`);
max = parseInt(max);

let country = [];

for (let i = 0; i < max; i++) {
    country[i] = prompt(`Enter Country Name : `);
}

function longElement(country){
    let longest = '0';
    for (let j = 0; j < country.length; j++) {
        if (country[j].length > longest.length) {
            longest = country[j];
        }
    }
    return longest;
}

alert(`Longest Element Of Array is : ${longElement(country)}`);