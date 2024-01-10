let inTxt = document.createElement('input');
inTxt.setAttribute('placeholder','username');
document.querySelector('body').append(inTxt);

let btn = document.createElement('button');
btn.setAttribute('id','btn');
btn.innerText = "Click Me!";
document.querySelector('body').append(btn);

let qbtn = document.querySelector('#btn');
qbtn.classList.add('qbtn');