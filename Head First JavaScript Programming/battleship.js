var r= Math.floor(Math.random()*5);
var location1 =r;
var location2 =r+1;
var location3 =r+2;
var guess;
var hits =0;
var guesses =0;
var isSunk =false;
while (!isSunk) {
    guess= prompt("Ready, aim,fire!(enter a number 0-6 )");
    if(guess < 0 || guess >6){
        alert("Pleaase enter a valid cell number!");
    }else{
        guesses++;
        if(guess == location1|| guess == location2|| guess == location3){
            hits++;
            alert("HIT!");
            if(hits==3){
                isSunk=true;
                alert("You sank my battleship!");
            }
        }else{
            alert("MISS")
        }
    }
}
var stats= "You took " + guesses +"guesses to sink the battleship,"+"wich means your shooting accuracy was "+(3/guesses);
alert(stats);
