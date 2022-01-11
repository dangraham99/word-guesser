import React from 'react'
import BoardRow from './partials/BoardRow'

function Board(props) {
    return (

        <div id="board" className="grid grid-rows-6 gap-1 select-none">
            <BoardRow guess={props.layout[0]} />
            <BoardRow guess={props.layout[1]} />
            <BoardRow guess={props.layout[2]} />
            <BoardRow guess={props.layout[3]} />
            <BoardRow guess={props.layout[4]} />
            <BoardRow guess={props.layout[5]} />
        </div>


    )
}

export default Board
