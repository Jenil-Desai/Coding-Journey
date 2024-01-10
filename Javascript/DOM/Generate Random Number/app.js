let range = document.querySelector('#num');
let qty = document.querySelector('#qty');
let btn = document.querySelector('.Generate');
let btn2 = document.querySelector('.reset');
let cnt = 0;

btn.addEventListener('click',function () {
    if (range.value < 0 || qty.value < 0) {
        alert(`The Given Range Or Quantity is Not Positive Number.`);
        return;
    }
    while (cnt != qty.value) {
        cnt++;
        let randomNumber = Math.ceil(Math.random()*range.value);
        let newPara = document.createElement('p');
        newPara.innerText = `${cnt}). ${randomNumber}`;
        document.querySelector('.Generated_box').append(newPara);
    }
});

btn2.addEventListener('click', removeGenNum);

function removeGenNum() {
    const fs = document.querySelector('.Generated_box');
    const para = fs.querySelectorAll('p');
    para.forEach(para => {
        para.remove();
    });
}