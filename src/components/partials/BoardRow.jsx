import React from 'react'
import LetterTile from './LetterTile'

function BoardRow(props) {



    return (
        <div className="grid grid-cols-5 gap-1">
            <LetterTile>{props.guess[0]}</LetterTile>
            <LetterTile>{props.guess[1]}</LetterTile>
            <LetterTile>{props.guess[2]}</LetterTile>
            <LetterTile>{props.guess[3]}</LetterTile>
            <LetterTile>{props.guess[4]}</LetterTile>


        </div>
    )
}

export default BoardRow
