import Blackjack from "blackjack-dealer-logic"

export default () => {
    alert("It works!");
    const app =document.getElementById("app");
    const blackjack = new Blackjack(app);
    blackjack.start();
}