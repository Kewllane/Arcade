const gameBoard = document.getElementById("gameBoard")
const start = document.getElementById("startButton")
const space = document.querySelectorAll(".space")
const turnResult = document.getElementById("turnResult")
const onePlayer = document.getElementById("onePlayer")
const twoPlayer = document.getElementById("twoPlayer")
const player1Input = document.getElementById("player1Input")
const player2Input = document.getElementById("player2Input")
const space1 = document.getElementById("space1")
const space2 = document.getElementById("space2")
const space3 = document.getElementById("space3")
const space4 = document.getElementById("space4")
const space5 = document.getElementById("space5")
const space6 = document.getElementById("space6")
const space7 = document.getElementById("space7")
const space8 = document.getElementById("space8")
const space9 = document.getElementById("space9")
let player1 = player1Input.value 
let player2 = "Computer"
const playerX = 'X'
const playerO = 'O'
const tie = "Game Ends in a Tie!"
const gameState = {
    players: [playerX, playerO],
    board: [
      [space1, space2, space3],
      [space4, space5, space6],
      [space7, space8, space9]
    ]
}
let turn = gameState.players[Math.floor(Math.random() * gameState.players.length)]

document.addEventListener('DOMContentLoaded', onPageLoad)

function onPageLoad () {
    space1.disabled = true
    space2.disabled = true
    space3.disabled = true
    space4.disabled = true
    space5.disabled = true
    space6.disabled = true
    space7.disabled = true
    space8.disabled = true
    space9.disabled = true
}

start.addEventListener('click', reset)

function reset () {
    turn = gameState.players[Math.floor(Math.random() * gameState.players.length)]
    for (let i = 0; i < space.length; i++) {
        space[i].innerText = "";
        space[i].disabled = false;
    }
    turnResult.innerText = switchTurns()
    console.log(turn)
    disableSpace()
}

onePlayer.addEventListener('click', onePlayerClick)
onePlayer.addEventListener('click', reset)

function onePlayerClick () {
    player1 = player1Input.value
    player2 = "Computer"
    if (player1 === "") {
        player1 = "Player 1"
    }
    console.log(player1)
    console.log(player2)
}

twoPlayer.addEventListener('click', twoPlayerClick)
twoPlayer.addEventListener('click', reset)

function twoPlayerClick () {
    player1 = player1Input.value;
    player2 = player2Input.value;
    if (player1Input.value === "") {
        player1 = "Player 1"
    }
    if (player2Input.value === "") {
        player2 = "Player 2"
    }
    console.log(player1)
    console.log(player2)
}

function computerOpponent () {
    let flattenBoard = gameState.board.flat()
    let randomButton = flattenBoard[Math.floor(Math.random() * 9) + 1]
    console.log(randomButton)
    for (let i = 0; i < gameState.board.length; i++) {
        for (let j = 0; j < gameState.board[i].length; j++) {
            if (gameState.board[i][j] === randomButton) {
                if (gameState.board[i][j].innerText === "") {
                    gameState.board[i][j].innerText = "O";
                    return
                }
            }
        }
    }
}

function checkWinnerX () {
    if (space1.innerText === "X" && space2.innerText === "X" && space3.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    } else if (space4.innerText === "X" && space5.innerText === "X" && space6.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    } else if (space7.innerText === "X" && space8.innerText === "X" && space9.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    } else if (space1.innerText === "X" && space4.innerText === "X" && space7.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    } else if (space2.innerText === "X" && space5.innerText === "X" && space8.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    } else if (space3.innerText === "X" && space6.innerText === "X" && space9.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    } else if (space1.innerText === "X" && space5.innerText === "X" && space9.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    } else if (space3.innerText === "X" && space5.innerText === "X" && space7.innerText === "X") {
        return turnResult.innerText = player1 + " Wins!"
    }
    return false
}

function checkWinnerO () {
    if (space1.innerText === "O" && space2.innerText === "O" && space3.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    } else if (space4.innerText === "O" && space5.innerText === "O" && space6.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    } else if (space7.innerText === "O" && space8.innerText === "O" && space9.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    } else if (space1.innerText === "O" && space4.innerText === "O" && space7.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    } else if (space2.innerText === "O" && space5.innerText === "O" && space8.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    } else if (space3.innerText === "O" && space6.innerText === "O" && space9.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    } else if (space1.innerText === "O" && space5.innerText === "O" && space9.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    } else if (space3.innerText === "O" && space5.innerText === "O" && space7.innerText === "O") {
        return turnResult.innerText = player2 + " Wins!"
    }
    return false
}

function disableSpace () {
    if (checkWinnerX() !== false || checkWinnerO() !== false) {
        space1.disabled = true
        space2.disabled = true
        space3.disabled = true
        space4.disabled = true
        space5.disabled = true
        space6.disabled = true
        space7.disabled = true
        space8.disabled = true
        space9.disabled = true
    }
}

function gameFinished () {
    for (let i = 0; i < gameState.board.length; i++) {
        for (let j = 0; j < gameState.board[i].length; j++) {
            if (gameState.board[i][j].innerText === '') {
                return false;
            }
        }
    }
    return turnResult.innerText = tie
}

function switchTurns () {
    if (turn === playerO) {
        turn = playerX
        return turnResult.innerText = "It's " + player1 + "'s Turn"
    } else if (turn === playerX && player2 === "Computer") {
        computerOpponent()
        turn = playerX
        return turnResult.innerText = "It's " + player1 + "'s Turn"
    } else if (turn === playerX) {
        turn = playerO
        return turnResult.innerText = "It's " + player2 + "'s Turn"
    }
}

space1.addEventListener('click', function play () {
    if (turn === playerX) {
        space1.innerText = "X";
        space1.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space1.innerText = "O"
        space1.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})
space2.addEventListener('click', function play () {
    if (turn === playerX) {
        space2.innerText = "X";
        space2.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space2.innerText = "O"
        space2.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})
space3.addEventListener('click', function play () {
    if (turn === playerX) {
        space3.innerText = "X";
        space3.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space3.innerText = "O"
        space3.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})
space4.addEventListener('click', function play () {
    if (turn === playerX) {
        space4.innerText = "X";
        space4.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space4.innerText = "O"
        space4.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})
space5.addEventListener('click', function play () {
    if (turn === playerX) {
        space5.innerText = "X";
        space5.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space5.innerText = "O"
        space5.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})
space6.addEventListener('click', function play () {
    if (turn === playerX) {
        space6.innerText = "X";
        space6.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space6.innerText = "O"
        space6.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})
space7.addEventListener('click', function play () {
    if (turn === playerX) {
        space7.innerText = "X";
        space7.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space7.innerText = "O"
        space7.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})
space8.addEventListener('click', function play () {
    if (turn === playerX) {
        space8.innerText = "X";
        space8.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space8.innerText = "O"
        space8.disabled = true
        switchTurns()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
        gameFinished()
    }
})
space9.addEventListener('click', function play () {
    if (turn === playerX) {
        space9.innerText = "X";
        space9.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    } else if (turn === playerO) {
        space9.innerText = "O"
        space9.disabled = true
        switchTurns()
        gameFinished()
        checkWinnerX()
        checkWinnerO()
        disableSpace()
    }
})