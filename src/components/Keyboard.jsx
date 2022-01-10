import React from 'react'
import KeyboardTile from './partials/KeyboardTile'

function Keyboard(props) {

    let styleClasses = {
        incorrect: "",
        correct: "",
        partial: "",
        neutral: "bg-neutral-500 font-bold text-sm rounded-sm"
    }


    function handleInput(keyboardKey) {

        let validKey = false

        keyboardKey = keyboardKey.toUpperCase()

        //check to see if the key is any of the control keys that we have seperate functions for (if user pressed their keyboard)
        if (keyboardKey === "BACKSPACE" || keyboardKey === "DELETE") {
            props.handleBackspace()
        }

        if (keyboardKey === "ENTER") {
            props.handleEnter()
        }


        //checks if the input exists in the mutli-dimensional keyboard array
        for (var outerIndex = 0; outerIndex < props.layout.length; outerIndex++) {
            for (var innerIndex = 0; innerIndex < props.layout[outerIndex].length; innerIndex++) {
                if (props.layout[outerIndex][innerIndex] === keyboardKey) {

                    validKey = true
                }
            }

        }

        if (validKey) {
            props.updateGameBoard(keyboardKey)
        }




    }





    return (

        <div onKeyDown={(e) => { handleInput(e.key) }} className="space-y-1 mb-8 mx-2">
            <div className="flex space-x-1 items-center justify-center">
                {
                    props.layout[0].map((keyboardKey, index) => {
                        return <KeyboardTile tabIndex="-1" onClick={() => { handleInput(keyboardKey) }} key={index}>{keyboardKey}</KeyboardTile>
                    })
                }
            </div>
            <div className="flex space-x-1 items-center justify-center">
                {
                    props.layout[1].map((keyboardKey, index) => {
                        return <KeyboardTile tabIndex="-1" onClick={() => { handleInput(keyboardKey) }} key={index}>{keyboardKey}</KeyboardTile>
                    })
                }
            </div>
            <div className="flex space-x-1 items-center justify-center">
                <KeyboardTile tabIndex="-1" className="flex items-center justify-center" optionKey={true} val='enter' onClick={props.handleEnter}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg></KeyboardTile>
                {
                    props.layout[2].map((keyboardKey, index) => {
                        return <KeyboardTile tabIndex="-1" onClick={() => { handleInput(keyboardKey) }} key={index}>{keyboardKey}</KeyboardTile>
                    })
                }
                <KeyboardTile tabIndex="-1" className="flex items-center justify-center h-11" optionKey={true} val='backspace' onClick={props.handleBackspace}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                    </svg>
                </KeyboardTile>
            </div>
        </div>

    )
}

export default Keyboard
