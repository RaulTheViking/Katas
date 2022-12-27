function sheldonGame(Player1, Player2) {
    let result 
    if (Player1 === Player2) {
        result = "Draw";
    }
    if (Player1 === "scissors" && Player2 === "paper") {
        result = "Player1";
    }
    if (Player1 === "paper" && Player2 === "scissors") {
        result = "Player2";
    }
    if (Player1 === "scissors" && Player2 === "spock") {
        result = "Player2";
    }
    if (Player1 === "spock" && Player2 === "scissors") {
        result = "Player1";
    }
    if (Player1 === "lagarto" && Player2 === "scissors") {
        result = "Player2";
    }
    if (Player1 === "scissors" && Player2 === "lagarto") {
        result = "Player1";
    }
    if (Player1 === "rock" && Player2 === "paper") {
        result = "Player2";
    }
    if (Player1 === "paper" && Player2 === "rock") {
        result = "Player1";
    }
    if (Player1 === "paper" && Player2 === "lagarto") {
        result = "Player2";
    }
    if (Player1 === "lagarto" && Player2 === "paper") {
        result = "Player1";
    }
    if (Player1 === "spock" && Player2 === "paper") {
        result = "Player2";
    }
    if (Player1 === "paper" && Player2 === "spock") {
        result = "Player1";
    }
    if (Player1 === "lagarto" && Player2 === "rock") {
        result = "Player1";
    }
    if (Player1 === "rock" && Player2 === "lagarto") {
        result = "Player2";
    }
    if (Player1 === "spock" && Player2 === "rock") {
        result = "Player1";
    }
    if (Player1 === "rock" && Player2 === "spock") {
        result = "Player2";
    }
    if (Player1 === "lagarto" && Player2 === "spock") {
        result = "Player1";
    }
    if (Player1 === "spock" && Player2 === "lagarto") {
        result = "Player2";
    }
    if (Player1 === "rock" && Player2 === "scissors") {
        result = "Player1";
    }
    if (Player1 === "scissors" && Player2 === "rock") {
        result = "Player2";
    }
    return result
}

module.exports = sheldonGame 

