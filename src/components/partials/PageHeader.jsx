import React from 'react'
import { Link } from 'react-router-dom'


function PageHeader(props) {
    return (
        <div>
            <div className=" md:mx-0 mx-2 flex flex-row  items-center space-x-8 border-b mt-2 mb-8 border-neutral-400 pb-2 mb-4ffff">
                <div className="flex flex-1">
                </div>
                <div className="flex flex-1">
                    <h1 className="font-bold uppercase text-center mx-auto tracking-wider text-lg">{props.title}</h1>
                </div>
                <div className="flex flex-1 space-x-2 justify-end">

                    <Link to="/" className="cursor-pointer rounded-md p-1 hover:text-neutral-50 hover:bg-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default PageHeader
