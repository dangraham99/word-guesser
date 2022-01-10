import React, { useState, useEffect } from 'react'
import Navbar from './partials/Navbar'
import Board from './Board'
import Keyboard from './Keyboard'

function GameScreen() {

    const initBoardLayout = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ]

    //allows for future internationalisation
    const keyboardLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
    ]

    const [currentPos, setCurrentPos] = useState({
        character: 0,
        guess: 0
    })
    const [boardLayout, setBoardLayout] = useState(initBoardLayout)

    const [gameStateOver, setGameStateOver] = useState(false)

    function removeLetter() {
        if (currentPos.character > 0) {
            let currentBoardLayout = [...boardLayout]
            currentBoardLayout[currentPos.guess][currentPos.character - 1] = undefined



            setBoardLayout(currentBoardLayout)
            setCurrentPos({
                character: currentPos.character - 1,
                guess: currentPos.guess
            })
        } else {
            alert("You cannot remove any more characters!")
        }



    }


    function confirmGuess() {


        if (currentPos.character >= 5) {
            setCurrentPos({
                character: 0,
                guess: currentPos.guess + 1
            })
        } else (
            alert("You must complete your current guess!")
        )

        if (currentPos.guess >= 5) {
            setGameStateOver(true)
        }

    }


    function updateGameBoard(keyboardKey) {

        let currentBoardLayout = [...boardLayout]

        currentBoardLayout[currentPos.guess][currentPos.character] = keyboardKey

        // if in the middle of a guess, add the letter to the guess and move counter up
        if (currentPos.character <= 4) {
            setBoardLayout(currentBoardLayout)
            setCurrentPos({
                character: currentPos.character + 1,
                guess: currentPos.guess
            })

        } else {
            alert('You cannot add more letters to this guess!')
        }



    }

    //check if game is finished with each guess
    useEffect(() => {
        if (gameStateOver) {
            alert("You have finished the game")
        }
    }, [currentPos.guess])









    return (

        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            <Board layout={boardLayout} />
            <Keyboard layout={keyboardLayout} updateGameBoard={updateGameBoard} handleBackspace={removeLetter} handleEnter={confirmGuess} />
        </div>
    )
}

export default GameScreen
