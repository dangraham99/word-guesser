import React from 'react'
import BoardRow from './partials/BoardRow'

function Board(props) {
    return (

        <div id="board" className="grid grid-rows-6 gap-1 select-none">
            <BoardRow rowNumber={0} currentPos={props.currentPos} activeRow={props.currentPos.guess === 0} guess={props.layout[0]} />
            <BoardRow rowNumber={1} currentPos={props.currentPos} activeRow={props.currentPos.guess === 1} guess={props.layout[1]} />
            <BoardRow rowNumber={2} currentPos={props.currentPos} activeRow={props.currentPos.guess === 2} guess={props.layout[2]} />
            <BoardRow rowNumber={3} currentPos={props.currentPos} activeRow={props.currentPos.guess === 3} guess={props.layout[3]} />
            <BoardRow rowNumber={4} currentPos={props.currentPos} activeRow={props.currentPos.guess === 4} guess={props.layout[4]} />
            <BoardRow rowNumber={5} currentPos={props.currentPos} activeRow={props.currentPos.guess === 5} guess={props.layout[5]} />
        </div>


    )
}

export default Board
