let str = 'atmiya university';
function uni(str){
    let result = str[0];
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i])==-1) {
            result = result + str[i];
        }
    }
    return result;
}

console.log(`${uni(str)}`);