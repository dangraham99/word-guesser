import React from 'react'
import PageHeader from './partials/PageHeader'
import Footer from './partials/Footer'

function About() {
    return (
        <div className="flex flex-col justify-between h-screen ">
            <div>
                <PageHeader title={"About"} />
                <div className="text-sm mx-4 md:mx-0">
                    <div className="mb-8 text-sm">
                        <p>This project is the same concept as the original <a href="https://www.powerlanguage.co.uk/wordle/" className="font-bold underline text-white">WORDLE</a> game designed by @powerlanguage. Check it out if you enjoyed this.</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-base mb-2'>How to play: </h2>
                        <p className="text-sm">Players have <strong>six</strong> attempts to guess the five letter word. Once players make their guess, the tiles will change colour depending on how close your guess was to the word. You can then use this information for your next guess...</p>
                        <h2 className='font-bold text-base my-4'>Examples: </h2>
                        <div className="space-y-4 pb-4 border-b border-neutral-400">
                            <div className='space-y-1'>
                                <div className="flex space-x-1">
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">H</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold  bg-tile-correct-green">A</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">P</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">P</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">Y</div>
                                </div>
                                <p>The letter <strong>A</strong> is in the word, in the correct place</p>
                            </div>
                            <div className='space-y-1'>
                                <div className="flex space-x-1">
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">P</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">I</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">L</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold  bg-tile-exists-yellow">O</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">T</div>
                                </div>
                                <p>The letter <strong>O</strong> is in the word but it is in the wrong place.</p>
                            </div>
                            <div className='space-y-1'>
                                <div className="flex space-x-1">
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">T</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold  border border-neutral-600">O</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">A</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold bg-neutral-700">S</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">T</div>
                                </div>
                                <p>The letter <strong>S</strong> is not in the word at all.</p>
                            </div>
                        </div>
                        <p className="font-bold mt-2">A new puzzle is available each day!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
