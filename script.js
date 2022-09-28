
var comArr = ['R','P','S']
var win = 0
var lose = 0
var tie = 0
var rock = ('R')
var paper = ('P')
var scissors = ('S')
var WLT = ('')
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
                alert('It was a tie,')
            }
            if(compMove === 'P'){
                lose = lose + 1
                alert('you lost,')
            }
            if(compMove === 'S'){
                win = win + 1
                alert('you won,')
            }
        }
        if(playerMove === 'P'){
            if(compMove === 'R'){
                win = win + 1
                alert('you won,')
            }
            if(compMove === 'P'){
                tie = tie + 1
                alert('It was a tie,')
            }
            if(compMove === 'S'){
                lose = lose + 1
                alert('you lost,')
            }
        }
        if(playerMove === 'S'){
            if(compMove === 'R'){
                lose = lose + 1
                alert('you lost,')
            }
            if(compMove === 'P'){
                win = win + 1
                alert('you won,')
            }
            if(compMove === 'S'){
                tie = tie + 1
                alert('It was a tie,')
            }
        }

    }else{
        alert('That was not an option please enter P, R, or S')
    }
    WLT = 'Current Records:'
    WLT += '\r\n'
    WLT += 'wins:'+win
    WLT += '\r\n'
    WLT += 'Loses:'+lose
    WLT += '\r\n'
    WLT += 'ties:'+tie

    alert(WLT)
    
    contGame = confirm('Do you want to play again?')
    if(!contGame){
        start = 2
    }
}
}