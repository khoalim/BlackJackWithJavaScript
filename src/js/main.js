import Blackjack from "blackjack-dealer-logic"

export default () => {
    alert("It works!");
    const app = document.getElementById("app");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const blackjack = new Blackjack(app);

    blackjack.start();

    hitButton.oncllick = function(){
        blackjack.hit();
    }

    standButton.onclick = function(){
        blackjack.stand();
    }

    doubleButton.onclick = function(){
        blackjack.double();
    }



   
};