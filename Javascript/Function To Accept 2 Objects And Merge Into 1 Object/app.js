let obj = {
    name: 'jenil',
    age: 18,
    college: 'atmiya'
};

let obj2 = {
    product: 'keyboard',
    brand: 'logitech',
    rate: 2000
};

let mergeObj =  (obj,obj2) => ({...obj,...obj2});

console.log(`${mergeObj(obj,obj2)}`);