import React from 'react'

function Message(props) {


    return (
        <div className={`z-20 flex-col overflow-hidden justify-items-center items-center text-xl font-semibold text-neutral-100 bg-neutral-700 dark:bg-neutral-300 dark:text-black text-center rounded-xl px-3 py-3   shadow-inner ${props.message.show ? " animate__animated animate__faster animate__fadeInUp" : " animate__animated animate__faster animate__fadeOutDown"}`}>
            {props.message.string}
        </div>
    )
}

export default Message
