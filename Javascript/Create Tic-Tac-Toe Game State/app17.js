let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];

console.log(`${game[0]}`);
console.log(`${game[1]}`);
console.log(`${game[2]}`);

game[0].splice(1,1,'O');

console.log(`${game[0]}`);
console.log(`${game[1]}`);
console.log(`${game[2]}`);