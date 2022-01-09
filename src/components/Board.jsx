import React from 'react'
import BoardRow from './partials/BoardRow'

function Board() {
    return (

        <div id="board" className="grid grid-rows-6 mx-16 gap-1">
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
        </div>


    )
}

export default Board
