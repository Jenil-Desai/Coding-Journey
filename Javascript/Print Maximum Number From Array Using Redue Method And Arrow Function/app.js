let nums = [1,5,6,89,2,6,5,9,6,3,7,4,2,22,5,59,97,98,102,122,325,6335];

let maxVal = nums.reduce((max,el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(`${maxVal}`);