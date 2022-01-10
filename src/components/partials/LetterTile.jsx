import React from 'react'

function LetterTile(props) {
    return (
        <div className="p-2  gap-1 border border-neutral-600 text-center  text-3xl font-semibold">
            <span>{props.children || <>&nbsp;</>}</span>
        </div>
    )
}

export default LetterTile
