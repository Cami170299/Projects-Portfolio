function twoPlayers() {
    document.getElementById('tictactoe-container').style.display = 'block'
    document.getElementById('SingelOrMulty').style.display = "none"


var playground = document.querySelectorAll('#playgrnd')
var swap = 0; 
Array.from(playground).forEach( function (playground) {
    playground.addEventListener('click', e => {
// moves and turns.
        if (playground.innerHTML == '' && swap == 0){
            playground.innerHTML = 'X';
            swap = 1
        }
        else if (playground.innerHTML == '' && swap == 1){
            playground.innerHTML = 'O'
            swap = 0
        }
    } , {once: true})
})
//check a win ro a tie
let checkwinOrTie = document.querySelector('.body')
checkwinOrTie.addEventListener('click', check)
function check(){
    let playground = document.querySelectorAll('#playgrnd')
    let list = Array.from(playground);
    if (list[0].innerHTML  === 'O' && list[1].innerHTML  === 'O'&& list[2].innerHTML  === 'O'
    || list[3].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[5].innerHTML  === 'O'
    || list[6].innerHTML  === 'O' && list[7].innerHTML  === 'O'&& list[8].innerHTML  === 'O'
    || list[0].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[8].innerHTML  === 'O'
    || list[2].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[6].innerHTML  === 'O'
    || list[0].innerHTML  === 'O' && list[3].innerHTML  === 'O'&& list[6].innerHTML  === 'O'
    || list[1].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[7].innerHTML  === 'O'
    || list[2].innerHTML  === 'O' && list[5].innerHTML  === 'O'&& list[8].innerHTML  === 'O'
    ){
        document.getElementById('Winner_message').innerText = 'O Wins'
        document.getElementById('tictactoe-container').style.display = 'none'
        document.getElementById('reStart').style.display = 'block'
    }
    else if  (list[0].innerHTML  === 'X' && list[1].innerHTML  === 'X'&& list[2].innerHTML  === 'X'
    || list[3].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[5].innerHTML  === 'X'
    || list[6].innerHTML  === 'X' && list[7].innerHTML  === 'X'&& list[8].innerHTML  === 'X'
    || list[0].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[8].innerHTML  === 'X'
    || list[2].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[6].innerHTML  === 'X'
    || list[0].innerHTML  === 'X' && list[3].innerHTML  === 'X'&& list[6].innerHTML  === 'X'
    || list[1].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[7].innerHTML  === 'X'
    || list[2].innerHTML  === 'X' && list[5].innerHTML  === 'X'&& list[8].innerHTML  === 'X') {
        document.getElementById('Winner_message').innerText = 'X Wins'
        document.getElementById('tictactoe-container').style.display = 'none'
        document.getElementById('reStart').style.display = 'block'
    }
    else if (list[0].innerHTML != '' && list[1].innerHTML != ''  && list[2].innerHTML != '' 
            && list[4].innerHTML  != '' && list[5].innerHTML  != '' && list[6].innerHTML != '' 
            && list[7].innerHTML  != '' && list[3].innerHTML  != '' && list[8].innerHTML != ''
    ) {
        document.getElementById('Winner_message').innerText = 'It is a tie.'
        document.getElementById('tictactoe-container').style.display = 'none'
        document.getElementById('reStart').style.display = 'block'
        document.getElementById('reStart').style.backgroundColor = '#1f88ff'
    }
}
alert("X starts the game")
}

function singlePlayer() {
    document.getElementById('tictactoe-container').style.display = 'block'
    document.getElementById('SingelOrMulty').style.display = "none"
    changeTurns = 0;

    let gameField = document.querySelectorAll('#playgrnd')
    Array.from(gameField).forEach(function(gameField) {
        gameField.addEventListener('click', e=> {
            gameField.innerHTML = 'X'
        }, {once: true})
    })

    let checkwinOrTie = document.querySelector('.body')
        checkwinOrTie.addEventListener('click', versus)

    function versus() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        let gameField = document.querySelectorAll('#playgrnd')
        let list = Array.from(gameField)
        i = getRandomInt(9)
        while(i != 10){
            if (list[i].innerHTML === '') {
                list[i].innerHTML ='O'
                break
            }
            else if (list[0].innerHTML != '' && list[1].innerHTML != ''  && list[2].innerHTML != '' 
            && list[4].innerHTML  != '' && list[5].innerHTML  != '' && list[6].innerHTML != '' 
            && list[7].innerHTML  != '' && list[3].innerHTML  != '' && list[8].innerHTML != '') {
                document.getElementById('Winner_message').innerText = 'It is a tie.'
                document.getElementById('tictactoe-container').style.display = 'none'
                document.getElementById('reStart').style.display = 'block'
                document.getElementById('reStart').style.backgroundColor = '#1f88ff'
                break
            }
            else{
                i = getRandomInt(9)
            }
        }

        if (list[0].innerHTML  === 'O' && list[1].innerHTML  === 'O'&& list[2].innerHTML  === 'O'
    || list[3].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[5].innerHTML  === 'O'
    || list[6].innerHTML  === 'O' && list[7].innerHTML  === 'O'&& list[8].innerHTML  === 'O'
    || list[0].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[8].innerHTML  === 'O'
    || list[2].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[6].innerHTML  === 'O'
    || list[0].innerHTML  === 'O' && list[3].innerHTML  === 'O'&& list[6].innerHTML  === 'O'
    || list[1].innerHTML  === 'O' && list[4].innerHTML  === 'O'&& list[7].innerHTML  === 'O'
    || list[2].innerHTML  === 'O' && list[5].innerHTML  === 'O'&& list[8].innerHTML  === 'O'
    ){
        document.getElementById('Winner_message').innerText = 'O Wins'
        document.getElementById('tictactoe-container').style.display = 'none'
        document.getElementById('reStart').style.display = 'block'
    }
    else if  (list[0].innerHTML  === 'X' && list[1].innerHTML  === 'X'&& list[2].innerHTML  === 'X'
    || list[3].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[5].innerHTML  === 'X'
    || list[6].innerHTML  === 'X' && list[7].innerHTML  === 'X'&& list[8].innerHTML  === 'X'
    || list[0].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[8].innerHTML  === 'X'
    || list[2].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[6].innerHTML  === 'X'
    || list[0].innerHTML  === 'X' && list[3].innerHTML  === 'X'&& list[6].innerHTML  === 'X'
    || list[1].innerHTML  === 'X' && list[4].innerHTML  === 'X'&& list[7].innerHTML  === 'X'
    || list[2].innerHTML  === 'X' && list[5].innerHTML  === 'X'&& list[8].innerHTML  === 'X') {
        document.getElementById('Winner_message').innerText = 'X Wins'
        document.getElementById('tictactoe-container').style.display = 'none'
        document.getElementById('reStart').style.display = 'block'
    }
    else if (list[0].innerHTML != '' && list[1].innerHTML != ''  && list[2].innerHTML != '' 
            && list[4].innerHTML  != '' && list[5].innerHTML  != '' && list[6].innerHTML != '' 
            && list[7].innerHTML  != '' && list[3].innerHTML  != '' && list[8].innerHTML != ''
    ) {
        document.getElementById('Winner_message').innerText = 'It is a tie.'
        document.getElementById('tictactoe-container').style.display = 'none'
        document.getElementById('reStart').style.display = 'block'
        document.getElementById('reStart').style.backgroundColor = '#1f88ff'
    }
    }
    alert('X starts the game')
}