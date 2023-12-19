let num = prompt(`Enter Number : `);
num = parseInt(num);

function multable(num){
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} x ${index} = ${num*index}`);        
    }
}

multable(num);