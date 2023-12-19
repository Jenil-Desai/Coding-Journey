let nums = [1,2,3,5,6,9,7,2,30,5,96,75,62,663,-1,0,-9,20,3,-7,-96,2,69];

let minVal = nums.reduce( (min,el) => {
    if (min > el) {
        return el; 
    } else {
        return min;
    }
});

console.log(`${minVal}`);