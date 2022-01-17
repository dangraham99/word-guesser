import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'



function KeyboardTile({ children, status, setStyle, className = null, optionKey, val, ...rest }) {


    const [classStyling, setClassStyling] = useState('bg-gray-400 dark:bg-neutral-600')

    function updateStyle(status) {
        if (status === "incorrect") {
            setClassStyling("bg-gray-600 dark:bg-neutral-800")
            return
        }

        if (status === "correct") {
            setClassStyling("bg-tile-correct-green")
            return
        }

        if (status === "exists") {
            setClassStyling("bg-tile-exists-yellow")
            return
        }

        setClassStyling("bg-gray-400 dark:bg-neutral-600")


    }

    useEffect(() => {
        updateStyle(status)

    }, [status])

    let keyVal = ''

    if (!optionKey) {
        keyVal = children
    } else {
        keyVal = val
    }




    return (
        <button tabindex="-1" {...rest} className={className || classStyling + " font-bold text-sm rounded-md w-11 h-12 "}>
            {children}
        </button>
    )
}


export default KeyboardTile
