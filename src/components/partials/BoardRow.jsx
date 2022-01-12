import React, { useState, useEffect } from 'react'
import LetterTile from './LetterTile'


function BoardRow(props) {


    const [reveal, setReveal] = useState(false)

    useEffect(() => {
        if (props.currentPos.guess > props.rowNumber) {
            setReveal(true)
        }

    }, [props.currentPos.guess])

    return (

        <div className="flex justify-center min-w-full space-x-1">
            {
                props.guess.map((letterObject, index) => {
                    return <LetterTile activeTile={props.activeRow && props.currentPos.character === index} reveal={reveal} status={letterObject.status} timeOutDelay={index + 1} key={index}>{letterObject.val}</LetterTile>
                })
            }
        </div>


    )

}

export default BoardRow
