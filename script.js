
var comArr = ['R','P','S']
var win = 0
var lose = 0
var tie = 0
var rock = ('R')
var paper = ('P')
var scissors = ('S')
function gamePlay() {
    for(start=1;start===1;){
    playerMove = prompt('Pick rock(R), papper(P), or Scissors(S)','')
    var compChoice = Math.floor(Math.random() * comArr.length)
    var compMove = comArr[compChoice]
    
    if(playerMove === rock || playerMove === paper || playerMove === scissors){
        
        alert('The computer chooses '+ compMove)
        if(playerMove === 'R'){
            if(compMove === 'R'){
                tie = tie + 1
                alert('It was a tie, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
            if(compMove === 'P'){
                lose = lose + 1
                alert('you lost, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
            if(compMove === 'S'){
                win = win + 1
                alert('you won, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
        }
        if(playerMove === 'P'){
            if(compMove === 'R'){
                win = win + 1
                alert('you won, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
            if(compMove === 'P'){
                tie = tie + 1
                alert('It was a tie, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
            if(compMove === 'S'){
                lose = lose + 1
                alert('you lost, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
        }
        if(playerMove === 'S'){
            if(compMove === 'R'){
                lose = lose + 1
                alert('you lost, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
            if(compMove === 'P'){
                win = win + 1
                alert('you won, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
            if(compMove === 'S'){
                tie = tie + 1
                alert('It was a tie, Current records:: wins:'+win+' loses:'+lose+' ties:'+tie)
            }
        }

    }else{
        alert('That was not an option please enter P, R, or S')
    }
    contGame = confirm('Do you want to play again?')
    if(!contGame){
        start = 2
    }
}
}