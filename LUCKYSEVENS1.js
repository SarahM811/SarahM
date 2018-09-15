 function hideResults() {
    document.getElementById("results").style.display = "none";
} 

function play() {
    var startingBet = document.getElementById("betInput").value;
    var bet = startingBet;
	var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = dice1 + dice2;
    var betsArray = [];

	if (startingBet <= 0) {
		alert ("Please bet more than $0.");
	} else {
		
    while (bet > 0) {
		var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = dice1 + dice2;
		
        if(diceRoll != 7) {
            bet -= 1
        } else { 
            bet += 4
        }
	
        betsArray.push(bet)
    }

    var rollCounter = betsArray.length;
    var highestAmount = Math.max.apply(Math, betsArray);
    var highestPosition = betsArray.indexOf(highestAmount);
    var rollsFromHighest = rollCounter - highestPosition;

    function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("StartBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("TotalRolls").innerHTML = rollCounter;
    document.getElementById("HighestAmountWon").innerHTML = "$" +     highestAmount + ".00";
    document.getElementById("RollAtHighest").innerHTML = rollsFromHighest;
    };

    showResults();
}
}