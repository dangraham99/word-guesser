import React, { useState, useEffect } from 'react'
import LetterTile from './LetterTile'
import 'animate.css';


function BoardRow(props) {


    const [reveal, setReveal] = useState(false)
    const [classStyling, setClassStyling] = useState("flex justify-center min-w-full space-x-1")

    useEffect(() => {
        if (props.currentPos.guess > props.rowNumber) {
            setReveal(true)
        }

    }, [props.currentPos.guess])


    useEffect(() => {

        if (props.invalidGuess && props.activeRow) {

            setClassStyling(classStyling + " animate__animated animate__shakeX")


        }

    }, [props.invalidGuess])






    return (

        <div className={classStyling} onAnimationEnd={() => { setClassStyling(classStyling.replace(" animate__animated animate__shakeX", "")) }}>
            {

                props.guess.map((letterObject, index) => {
                    return <LetterTile activeTile={props.activeRow && props.currentPos.character === index} reveal={reveal} status={letterObject.status} timeOutDelay={index + 1} key={index}>{letterObject.val}</LetterTile>
                })

            }
        </div>



    )

}

export default BoardRow
