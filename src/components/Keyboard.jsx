import React from 'react'
import KeyboardTile from './partials/KeyboardTile'

function Keyboard() {


    function handleBackspace() {
        alert("Backspace pressed")
    }

    function handleSubmit() {
        alert('Answer submitted')
    }

    return (

        <div className="space-y-1 mb-8 mx-2">
            <div className="flex space-x-1 items-center justify-center">
                <KeyboardTile>Q</KeyboardTile>
                <KeyboardTile>W</KeyboardTile>
                <KeyboardTile>E</KeyboardTile>
                <KeyboardTile>R</KeyboardTile>
                <KeyboardTile>T</KeyboardTile>
                <KeyboardTile>Y</KeyboardTile>
                <KeyboardTile>U</KeyboardTile>
                <KeyboardTile>I</KeyboardTile>
                <KeyboardTile>O</KeyboardTile>
                <KeyboardTile>P</KeyboardTile>
            </div>
            <div className="flex space-x-1 items-center justify-center">
                <KeyboardTile>A</KeyboardTile>
                <KeyboardTile>S</KeyboardTile>
                <KeyboardTile>D</KeyboardTile>
                <KeyboardTile>F</KeyboardTile>
                <KeyboardTile>G</KeyboardTile>
                <KeyboardTile>H</KeyboardTile>
                <KeyboardTile>J</KeyboardTile>
                <KeyboardTile>K</KeyboardTile>
                <KeyboardTile>L</KeyboardTile>
            </div>
            <div className="flex space-x-1 items-center justify-center">
                <KeyboardTile className="flex items-center justify-center" optionKey={true} val='enter' onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg></KeyboardTile>
                <KeyboardTile>Z</KeyboardTile>
                <KeyboardTile>X</KeyboardTile>
                <KeyboardTile>C</KeyboardTile>
                <KeyboardTile>V</KeyboardTile>
                <KeyboardTile>B</KeyboardTile>
                <KeyboardTile>N</KeyboardTile>
                <KeyboardTile>M</KeyboardTile>
                <KeyboardTile className="flex items-center justify-center h-11" optionKey={true} val='backspace' onClick={handleBackspace}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                    </svg>
                </KeyboardTile>
            </div>
        </div>

    )
}

export default Keyboard
