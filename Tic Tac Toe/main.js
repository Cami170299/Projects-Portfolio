alert("X starts the game")

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
var checkwinOrTie = document.querySelector('.body')
checkwinOrTie.addEventListener('click', check)

function check(){
    var playground = document.querySelectorAll('#playgrnd')
    var list = Array.from(playground);
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
        alert('It is a Tie')
        document.getElementById('tictactoe-container').style.display = 'none'
    }


    
}