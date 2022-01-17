import React, { useState, useEffect } from 'react'
import Navbar from './partials/Navbar'
import Board from './Board'
import Keyboard from './Keyboard'
import Message from './partials/Message'
import seedrandom from 'seedrandom'
import Modal from './Modal'
import { useTranslation } from 'react-i18next'
import words from '../locales/words.json'
import i18n from '../i18n'

function GameScreen() {

    const STATUS = {
        NEUTRAL: 'neutral',
        CORRECT: 'correct',
        INCORRECT: 'incorrect',
        EXISTS: 'exists'

    }

    const MESSAGE = {
        INVALID_GUESS: "'invalid-guess'",
        GAME_WIN: "game-win",
        GAME_OVER: "game-over"

    }

    const STATE = {
        IN_PROGRESS: 'in_progress',
        WIN: 'win',
        FAIL: 'fail'
    }

    const initBoardLayout = [
        [{ val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }],
        [{ val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }],
        [{ val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }],
        [{ val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }],
        [{ val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }],
        [{ val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }, { val: null, status: STATUS.NEUTRAL }]
    ]






    //allows for future internationalisation
    const enKeyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
    ]

    const deKeyboard = [
        ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ü"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
        ["Y", "X", "C", "V", "B", "N", "M"],
    ]




    const [currentPos, setCurrentPos] = useState({
        character: 0,
        guess: 0
    })

    const { t } = useTranslation()

    //TODO: Refactor into Context Provider
    const wordList = i18n.language === 'de' ? words.deWordList : words.enWordList
    const keyboard = i18n.language === 'de' ? deKeyboard : enKeyboard

    let initChosenWord = wordList[psrg()].toUpperCase()


    const [chosenWord, setChosenWord] = useState(initChosenWord)
    const [message, setMessage] = useState({ type: null, string: null, show: false })
    const [boardLayout, setBoardLayout] = useState(initBoardLayout)
    const [gameState, setGameState] = useState(STATE.IN_PROGRESS)
    const [correctLetters, setCorrectLetters] = useState([])
    const [existsLetters, setExistsLetters] = useState([])
    const [incorrectLetters, setIncorrectLetters] = useState([])
    const [playerStats, setPlayerStats] = useState({
        gamesPlayed: 0,
        gamesWon: 0,
        winRate: 0,
        currentStreak: 0,
        recordStreak: 0,
        previousGames: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
    })

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [tileAnimationComplete, setTileAnimationComplete] = useState(false)



    useEffect(() => {
        //reset the state if its a new day
        if (JSON.parse(localStorage.getItem("chosenWord")) !== chosenWord) {

            resetState()
            localStorage.setItem("chosenWord", JSON.stringify(chosenWord))
        } else {
            getStateFromLocalStorage()
        }

    }, [])

    function currentDateString() {
        const date = new Date()
        const dateString = (date.getDate()) + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        return dateString.toString()
    }

    function psrg() {

        const psuedorand = seedrandom(currentDateString)
        const randNum = Math.round(psuedorand() * wordList.length)
        return randNum

    }


    function resetState() {

        setBoardLayout(initBoardLayout)
        setGameState(STATE.IN_PROGRESS)
        setCorrectLetters([])
        setExistsLetters([])
        setIncorrectLetters([])
        setCurrentPos({
            character: 0,
            guess: 0
        })
        flashLocalStorage()



    }

    function getStateFromLocalStorage() {

        setBoardLayout(JSON.parse(localStorage.getItem("boardLayout")))
        setGameState(JSON.parse(localStorage.getItem("gameState")))
        setCorrectLetters(JSON.parse(localStorage.getItem("correctLetters")))
        setExistsLetters(JSON.parse(localStorage.getItem("existsLetters")))
        setIncorrectLetters(JSON.parse(localStorage.getItem("incorrectLetters")))
        setCurrentPos(JSON.parse(localStorage.getItem("currentPos")))

    }


    function onTileAnimationComplete(index) {
        if (index === 4) {
            setTileAnimationComplete(true)
        }
        else {
            setTileAnimationComplete(false)
        }
    }


    function toggleModal() {

        setModalIsOpen(!modalIsOpen)

    }


    function flashLocalStorage() {


        localStorage.setItem("boardLayout", JSON.stringify(boardLayout))
        localStorage.setItem("currentPos", JSON.stringify(currentPos))
        localStorage.setItem("gameState", JSON.stringify(gameState))
        localStorage.setItem("correctLetters", JSON.stringify(correctLetters))
        localStorage.setItem("existsLetters", JSON.stringify(existsLetters))
        localStorage.setItem("incorrectLetters", JSON.stringify(incorrectLetters))
        localStorage.setItem("playerStats", JSON.stringify(playerStats))





    }


    //save to local storage with each guess
    useEffect(() => {

        flashLocalStorage()

        if (currentPos.guess > 5 && gameState === STATE.IN_PROGRESS) {
            setTimeout(() => { setGameState(STATE.FAIL) }, 2000)
        }

    }, [currentPos.guess])


    //debug
    useEffect(() => {

    }, [chosenWord])

    useEffect(() => {
        if (gameState === STATE.WIN && tileAnimationComplete) {





            setMessage({ type: MESSAGE.GAME_WIN, string: t('messages.gameWin'), show: true })


            setTimeout(() => {
                setMessage({ type: null, string: null, show: false })
                setModalIsOpen(true)
            }, 8000)
        }
        else if (gameState === STATE.FAIL) {
            setMessage({ type: MESSAGE.GAME_OVER, string: `${t('messages.gameOver')} ${chosenWord}` })
            setTimeout(() => {
                setMessage({ type: null, string: null, show: false })
                setModalIsOpen(true)
            }, 8000)
        }



    }, [tileAnimationComplete])


    //clear form messages when the user presses a button
    useEffect(() => {
        setMessage({ type: null, string: message.string, show: false })
    }, [currentPos.character])



    function removeLetter() {
        if (currentPos.character > 0) {

            //setup placeholder var for board state
            let currentBoardLayout = [...boardLayout]
            currentBoardLayout[currentPos.guess][currentPos.character - 1].val = null

            //set board state and move pointer back
            setBoardLayout(currentBoardLayout)
            setCurrentPos({
                character: currentPos.character - 1,
                guess: currentPos.guess
            })

        } else {
            setMessage({ type: MESSAGE.INVALID_GUESS, string: t('messages.invalidGuessMinimumChars'), show: true })
        }



    }


    function confirmGuess() {


        //return the full word from the guess array of objects
        const guessArray = boardLayout[currentPos.guess]

        if (currentPos.character === 5) {
            //if the guess is a valid length then check if more guesses are necessary 
            evaluateGuess(guessArray)

            setCurrentPos({
                character: 0,
                guess: currentPos.guess + 1
            })



        }

        else {

            setMessage({ type: MESSAGE.INVALID_GUESS, string: t('messages.invalidGuessIncompleteChars'), show: true })

        }





    }


    function evaluateGuess(guessArray) {

        const guessString = guessArray.map(charObject => charObject.val).join("")
        let chosenWordArray = chosenWord.split("")






        //iterate through the guess array and evaluate the letters against chosen word array
        guessArray.forEach((letterObject, i) => {

            if (letterObject.val === chosenWordArray[i]) {
                //we need to remove the value to stop a duplicate (incorrect) return of a correct answer
                chosenWordArray[i] = "#"
                letterObject.status = STATUS.CORRECT
                let tempArray = correctLetters
                tempArray.push(letterObject.val)
                setCorrectLetters(tempArray)
            }
        })



        guessArray.forEach((letterObject, i) => {
            if (chosenWordArray.includes(letterObject.val)) {
                //find where in the chosenWord the value is and remove it, so that we do not get >=2 hits for the same single letter
                const targetIndex = chosenWordArray.indexOf(letterObject.val)
                chosenWordArray.splice(targetIndex, 1)
                letterObject.status = STATUS.EXISTS
                let tempArray = existsLetters
                tempArray.push(letterObject.val)
                setExistsLetters(tempArray)

            }
        })

        guessArray.forEach((letterObject, i) => {
            if (letterObject.status === STATUS.NEUTRAL) {
                letterObject.status = STATUS.INCORRECT
                let tempArray = incorrectLetters
                tempArray.push(letterObject.val)
                setIncorrectLetters(tempArray)
            }

        })







        if (guessString === chosenWord) {
            updatePlayerStats()
            setGameState(STATE.WIN)



        }



    };









    function updateGameBoard(keyboardKey) {



        let currentBoardLayout = [...boardLayout]



        // if in the middle of a guess, add the letter to the guess and move counter up
        if (currentPos.character <= 4) {
            currentBoardLayout[currentPos.guess][currentPos.character].val = keyboardKey
            setBoardLayout(currentBoardLayout)
            setCurrentPos({
                character: currentPos.character + 1,
                guess: currentPos.guess
            })

        } else {
            setMessage({ type: MESSAGE.INVALID_GUESS, string: t('messages.invalidGuessTooManyChars'), show: true })
        }
    }








    function updatePlayerStats() {
        let previousGamesObject = playerStats.previousGames

        const winRate = Math.floor(((playerStats.gamesWon + 1) / (playerStats.gamesPlayed + 1)) * 100)

        for (const i in previousGamesObject) {



            if (parseInt(i) === currentPos.guess + 1) {
                previousGamesObject[i] = previousGamesObject[i] + 1
            }
        }


        setPlayerStats({
            gamesPlayed: playerStats.gamesPlayed + 1,
            gamesWon: playerStats.gamesWon + 1,
            winRate: winRate,
            currentStreak: playerStats.currentStreak + 1,
            recordStreak: playerStats.currentStreak + 1 > playerStats.recordStreak ? playerStats.currentStreak + 1 : playerStats.recordStreak,
            previousGames: previousGamesObject
        })



        localStorage.setItem("playerStats", JSON.stringify(playerStats))
    }




    return (

        <div>


            <div className="flex flex-col mt-2 h-screen overflow-hidden justify-between">
                <Navbar toggleModal={toggleModal} />
                <Modal boardLayout={boardLayout} playerStats={playerStats} show={modalIsOpen} toggleModal={toggleModal} />
                {message.show ? <Message message={message} /> : <span />}
                <Board onTileAnimationComplete={onTileAnimationComplete} invalidGuess={message.type === MESSAGE.INVALID_GUESS} currentPos={currentPos} layout={boardLayout} />
                <Keyboard gameState={gameState} correctLetters={correctLetters} incorrectLetters={incorrectLetters} existsLetters={existsLetters} layout={keyboard} updateGameBoard={updateGameBoard} handleBackspace={removeLetter} handleEnter={confirmGuess} />
            </div>

        </div>
    )
}

export default GameScreen
