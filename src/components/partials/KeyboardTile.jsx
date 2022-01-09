import React from 'react'



function KeyboardTile({ children, className, optionKey, val, ...rest }) {

    let keyVal = ''

    if (!optionKey) {
        keyVal = children
    } else {
        keyVal = val
    }

    function handleClick() {
        alert(keyVal)
    }

    return (
        <button onClick={handleClick} {...rest} className={className + " bg-neutral-500 font-bold text-sm rounded-sm " + (optionKey ? "w-14 h-12" : "w-11 h-12")}>
            {children}
        </button>
    )
}

export default KeyboardTile
