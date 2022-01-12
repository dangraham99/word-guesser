import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'


function LetterTile(props) {



    const baseClass = "flex h-15 w-15 spacing-15 gap-1 justify-center items-center text-center text-4xl font-bold "
    const [classStyling, setClassStyling] = useState(baseClass + "border border-neutral-600")






    function updateStyling() {
        if (props.status === "incorrect") {
            setClassStyling(baseClass + "bg-neutral-600")

        }

        if (props.status === "correct") {
            setClassStyling(baseClass + "bg-tile-correct-green")
        }

        if (props.status === "exists") {
            setClassStyling(baseClass + "bg-tile-exists-yellow")
        }


    }


    useEffect(() => {

        if (props.reveal) {
            updateStyling()
        }



    }, [props.reveal])


    useEffect(() => {

        if (props.children) {
            setClassStyling(classStyling + " letter-pop")
        }

        if (!props.children) {
            setClassStyling(classStyling.replace("letter-pop", ""))
        }

    }, [props.children])











    return (

        <CSSTransition in={props.reveal} classNames={"tile-flip"} appear={true} timeout={250 * props.timeOutDelay}>
            <div className={classStyling}>
                <span className="letter">{props.children || <>&nbsp;</>}</span>
            </div>

        </CSSTransition>


    )
}

export default LetterTile
