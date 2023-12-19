let start = prompt(`Enter Start Number : `);
start = parseInt(start);

let end = prompt(`Enter End Number : `);
end = parseInt(end);

function genRandom(start,end) {
    let diff = end - start;
    return Math.ceil(Math.random() * diff) + start;
}

console.log(`${genRandom(start,end)}`);