
let currentTurn = 'X'

const board = document.querySelector('.board')

board.addEventListener('click', function() {
  if (currentTurn === 'X') {
    currentTurn = 'O'
  } else if (currentTurn === 'O') {
    currentTurn = 'X'
  }

  document.querySelector('.display-turn').innerText = currentTurn
})


function checkWinner() {
  //.
  //.
  //.

  // we've already found that X won here
  document.querySelector('.winner').innerText = 'X is the winner!'
  document.querySelector('.display-turn').innerText = ''
}

const cells = document.querySelectorAll('.cell')
for (let cell of cells) {
  cell.addEventListener('click', function(e) {
    e.target
  })
}









