let nums = [1,23,10,1,50,6,55,23,40,82,380,960,4682,5560];
// let nums = [10,20,30,40,50,60];

let tenMul = nums.every( (el) => (el %  10 == 0));

console.log(`${tenMul}`);