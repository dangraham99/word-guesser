import React from 'react'
import LetterTile from './LetterTile'

function BoardRow() {
    return (
        <div className="grid grid-cols-5 gap-1">
            <LetterTile />
            <LetterTile />
            <LetterTile />
            <LetterTile />
            <LetterTile />

        </div>
    )
}

export default BoardRow
