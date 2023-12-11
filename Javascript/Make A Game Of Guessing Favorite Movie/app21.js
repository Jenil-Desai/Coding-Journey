let favmov = "Animal";
let gusmov;

while (favmov!=gusmov) {
    gusmov = prompt("Guess The Favorite Movie : ");
    if (gusmov!=favmov) {
        option = prompt("You Guessed Wrong Movie! Want To Try Again or Quit :");
        if (option=='quit' || option=='Quit') {
            alert("Thanks For Playing Game");
            break;
        }
    }
    else{
        alert("You Guessed The Right Movie! Crongulations");
        break;
    }
}