let cnt=0;
let arr = [1,2,3,4,5,6,7,8,9,10];

let arrSqr = arr.map ( (el) => el*el);

let arrSum = arr.reduce ( (res,el) => res+el);

let arrAvg = arrSum/arr.length;

console.log(`Array Sqaure : ${arrSqr} Array Sum : ${arrSum} Array Average : ${arrAvg}`);