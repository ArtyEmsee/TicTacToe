var prompt = require('prompt')
const print = console.log

var tTTBoard = "_____________\n|_1_|_2_|_3_|\n|_4_|_5_|_6_|\n|_7_|_8_|_9_|"




renderBoard = (turn) => {
    print(tTTBoard)

    if (turn === 0) {
        print("PLAYER 1 DO THE THING ")

    }

    if (turn === 1) {
        print("PLAYER 2 DO THE THING ")
    }
}

playTTT = () => {
    let turn = 0,
        gameOver = false

    for (var i = 0; i < 8; i++) {
        renderBoard()

        prompt.start()

        prompt.get(['make a move, guy'], function (err, result) {
            
        }).then
    }

    print("Cat's game or whatever you call it.")
}

playTTT()