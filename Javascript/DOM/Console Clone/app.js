let input = document.querySelector('input');
let cnt = 0;

input.addEventListener('input',function () {
    let newPara = document.createElement('p');
    cnt++;
    pid = `p${cnt}`;
    newPara.setAttribute("id",pid);
    newPara.innerHTML = "";
    document.querySelector('body').append(newPara);
    let setPara = document.querySelector(`#${pid}`);
    setPara.innerHTML = this.value;
});