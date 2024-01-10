let newBtn = document.createElement('button');
newBtn.innerText = "Hey I'm Button!";
document.querySelector('body').append(newBtn);
let btn = document.querySelector('button');
btn.addEventListener('click',function () {
    this.style.backgroundColor = "green";
})