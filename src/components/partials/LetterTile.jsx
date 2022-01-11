import React, { useState, useEffect } from 'react'
import { flip, set, useSpring, animated } from 'react-spring'


function LetterTile(props) {



    const baseClass = "flex h-15 w-15 spacing-15 gap-1 justify-center items-center text-center text-4xl font-bold  "
    const [classStyling, setClassStyling] = useState(baseClass + "border border-neutral-600")



    function updateStyling(status) {
        if (status === "incorrect") {
            setClassStyling(baseClass + "bg-neutral-600 tile-flip")

        }

        if (status === "correct") {
            setClassStyling(baseClass + "bg-tile-correct-green tile-flip")
        }

        if (status === "exists") {
            setClassStyling(baseClass + "bg-tile-exists-yellow tile-flip")
        }
    }


    useEffect(() => {
        updateStyling(props.status)
    }, [props.status])




    return (

        <div className={classStyling}>
            <span className="letter">{props.children || <>&nbsp;</>}</span>
        </div>


    )
}

export default LetterTile
