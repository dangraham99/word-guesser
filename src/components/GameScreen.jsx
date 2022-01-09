import React from 'react'
import Navbar from './partials/Navbar'
import Board from './Board'
import Keyboard from './Keyboard'

function GameScreen() {
    return (

        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            <Board />
            <Keyboard />
        </div>
    )
}

export default GameScreen
