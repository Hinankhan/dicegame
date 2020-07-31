let scores, roundScores, activeplayer,gamePlaying
init()// initalisation function where every global variables are defined and all other default values
      // this function is used in order to not repeat the code at other places where we require them   

//setting the value of any element
//document.querySelector('#current-' + activeplayer).textContent = dice
//getting or reading the value of any element
//let x = document.querySelector('.player1-totalscore').textContent
//console.log(x)
//changing the css styling of any element


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1. we need a randon number
   let dice = Math.floor(Math.random() * 6) + 1
   //2. display the results
   let diceDom = document.querySelector('.dice')//here we decleared a variable dicdom to reuse in instead of wiriting the full statement
   diceDom.style.display = 'block'//here we use dicedom and show the dice to user interface
   diceDom.src = '/static/dice-' + dice + '.png'// here we update the dice to rolled number 
   

   //3.update the round score if the rolled number was not 1

   if(dice !== 1) {
       hideRolledMsg()
       //Add the score
       roundScores = roundScores + dice
       document.querySelector('#current-' + activeplayer).textContent = roundScores//here we add the round score to current score
   }else {
       // next player's turn
        hideRolledMsg()
           document.querySelector('.player-'+activeplayer+'-rolled-1').style.visibility = 'visible';
     nextPlayer()

   }
    }  
})
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
         // update the current score to global score
    scores[activeplayer] = scores[activeplayer] + roundScores
    //update the user interface
    document.getElementById('current-score-' + activeplayer).textContent = scores[activeplayer]

    //check if  the player won the game
    if (scores[activeplayer] >= 20) {
        document.querySelector('#name-' + activeplayer).innerHTML = '<h1>WINNER!</h1>'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.pannel-player-' + activeplayer).classList.add('winner')
        document.querySelector('.pannel-player-' + activeplayer).classList.remove('active-1')
        gamePlaying = false
    }else {
        //next player
        nextPlayer()
    }   
    }
})
function nextPlayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 //using terneary operator intead of if else statments
    /* if(activeplayer === 0) {
         activeplayer = 1
     }
     else{
         activeplayer = 0
     }*/
     roundScores=0 // here we again set cureent scores to zero when its other players turn
     document.querySelector('#current-0').textContent= '0'//here we are setting 0 in front end as well
     document.querySelector('#current-1').textContent= '0'
     document.querySelector('.pannel-player-0').classList.toggle('active-1')
     document.querySelector('.pannel-player-1').classList.toggle('active-1')
     //document.querySelector('.dice').style.display="none"
     //here we can add or remove the classes 
     //document.querySelector('.pannel-player-1').classList.remove('active-1')
     //document.querySelector('.pannel-player-2').classList.add('active-1')
}
document.querySelector('.btn-new').addEventListener('click', init)
//rules
document.querySelector('.btn-rules').addEventListener('click', rules)
document.querySelector('.btn-back').addEventListener('click', backToPage)

//this is the initalisation function a start function where everything is set to default
function init(){
    scores = [0,0];
    roundScores = 0;
    activeplayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('current-score-0').textContent ='0'
    document.getElementById('current-score-1').textContent ='0'
    document.getElementById('current-0').textContent ='0'
    document.getElementById('current-1').textContent ='0'
    hideRolledMsg()
    document.getElementById('name-0').innerHTML = '<h1>Player 1<h1>'
    document.getElementById('name-1').innerHTML = '<h1>Player 2<h1>'
    document.querySelector('.pannel-player-0').classList.remove('winner')
    document.querySelector('.pannel-player-1').classList.remove('winner')
    document.querySelector('.pannel-player-0').classList.remove('active-1')
    document.querySelector('.pannel-player-1').classList.remove('active-1')
    document.querySelector('.pannel-player-0').classList.add('active-1')
}


// rolled message function to show the player rolled 1
function hideRolledMsg(){
	document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
	document.querySelector('.player-1-rolled-1').style.visibility = 'hidden';
}
function rules() {
    document.querySelector('.games-pannel').style.visibility = 'hidden'
    document.querySelector('.rules-pannel').style.display= 'block'
    document.querySelector('.pannel-player-0').style.display= 'none'
    document.querySelector('.pannel-player-1').style.display= 'none'
    document.querySelector('.player-current-box-1').style.display= 'none'
    document.querySelector('.dice').style.display='none'
    document.querySelector('.player-current-box-2').style.display= 'none' 
}
function backToPage(){
    document.querySelector('.rules-pannel').style.display= 'none'
    document.querySelector('.pannel-player-0').style.display= 'block'
    document.querySelector('.pannel-player-1').style.display= 'block'
    document.querySelector('.player-current-box-1').style.display= 'block'
    document.querySelector('.player-current-box-2').style.display= 'block'
    document.querySelector('.games-pannel').style.visibility = 'visible'
}