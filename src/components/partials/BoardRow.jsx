import React, { useState } from 'react'
import LetterTile from './LetterTile'


function BoardRow(props) {

    const [activeRow, setActiveRow] = useState(false)



    return (

        <div className="flex justify-center min-w-full space-x-1">
            {
                props.guess.map((letterObject, index) => {
                    return <LetterTile status={letterObject.status} key={index}>{letterObject.val}</LetterTile>
                })
            }
        </div>


    )

}

export default BoardRow
