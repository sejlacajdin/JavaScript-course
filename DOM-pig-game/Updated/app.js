/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

CHANGE THE GAME TO FOLLOW THESE RULES:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
 (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
 (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.
 (Hint: you will need CSS position the second dice, so take a look at the CSS code for the first one.)

*/
var scores, roundScore, activePlayer, Dice, gamePlaying, previousDice1,previousDice2, FinalValue;

init();


//set up event handler (button where we will roll the dice)
document.querySelector('.btn-roll').addEventListener('click',function(){//anonymous function 
        
    if(gamePlaying && FinalValue>0){ //state variable

        //1. Random number 
        var dice1=Math.floor(Math.random()*6)+1;
        var dice2=Math.floor(Math.random()*6)+1;
    
        //2. Display the result 
        document.getElementById("dice-1").style.display='block'; //to display the dice 
        document.getElementById("dice-2").style.display='block';
        document.getElementById("dice-1").src='dice-'+dice1+'.png';
        document.getElementById("dice-2").src='dice-'+dice2+'.png';
    
        //3. Update the round score IF the rolled number was NOT a 1
        if((dice1===6 || dice2===6) && (previousDice1===6 || previousDice2===6)){
            // Player looses score
            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }else if(dice1 !== 1 && dice2!==1){           
            previousDice1=dice1;
            previousDice2=dice2;
            //Add  score 
            roundScore+=(dice1+dice2);
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }else{
            //Next player
            nextPlayer();
        }

    }
} ); 

//Event listener for the hold button 
document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying && FinalValue>0){
    //Add CURRENT score to GLOBAL score
    scores[activePlayer]+=roundScore;

    //Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    //Check if player won the game
    if(scores[activePlayer]>=FinalValue){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        hideDice();
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        gamePlaying=false;
    }else{

        //Next player 
        nextPlayer();
    }
}
});


function nextPlayer(){
    //Next player
    activePlayer===0? activePlayer=1: activePlayer=0;
    roundScore=0;
    previousDice=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    //remove and toggle classes
   // document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //to hide again the dice for next player 
    hideDice();
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){ //to initialize 
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
gamePlaying=true;
previousDice=0;
FinalValue=0;
    //to hide dice 
 
    hideDice();

//To set elements to zero
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

function Final(){

    FinalValue=document.querySelector('#textScore').value;
    document.querySelector("#textScore").value='';
}

function hideDice(){
    document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';
}