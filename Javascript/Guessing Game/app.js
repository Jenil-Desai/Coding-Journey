let max = prompt("Enter Range :");
max = parseInt(max);
let radnum = Math.ceil(Math.random() * max);
while(true)
{
    let Option = prompt('Guess The Number [Tyoe quit to exit]');
    let hint;
    if (Option=='quit') {
        alert(`Thanks For Playing`);
        break;
    }
    else if (Option==radnum) {
        alert(`You Guessed Right Number. The Number Was ${radnum}`);
        break;
    }
    else {
        if (Option<radnum) {
            hint = 'You Guessed Smaller Number';
        } else {
            hint = 'You Guessed Larger Number';
        }
        alert(`You Gussed Wrong Number. Hint: ${hint}`);
    }
}