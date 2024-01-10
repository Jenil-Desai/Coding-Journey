let btn = document.querySelector('button');
let cnt = 0;

btn.addEventListener('click',function (params) {
    let h1 = document.querySelector('h1');
    randomColor = colorGen();
    h1.innerText = randomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;

    let h3 = document.querySelector('h3');
    cnt++;
    h3.innerText = `Count : ${cnt}`;
});

function colorGen(params) {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}