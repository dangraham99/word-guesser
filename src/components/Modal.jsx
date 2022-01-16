import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Chart } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export default function Modal(props) {


    const config = {
        type: 'bar',
        data: {
            datasets: [{
                data: props.playerStats,
            }],
            labels: ['1', '2', '3', '4', '5', '6']
        }
    }








    return (
        <>

            <Transition appear show={props.show} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={props.toggleModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-lg p-4 pb-5  my-8 overflow-hidden text-left align-middle transition-all transform dark:bg-neutral-900 shadow-xl rounded-2xl">
                                <div className="flex justify-end ">
                                    <button type="button" className="flex items-start p-1 rounded-lg hover:bg-neutral-700" onClick={() => props.toggleModal()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="py-4 space-y-2 px-4">
                                    <h1 className="text-md font-bold text-center uppercase tracking-wider mb-4">Statistics</h1>
                                    <div className="flex justify-center items-center text-center space-x-10 pb-4">
                                        <div>
                                            <p className="text-4xl">{props.playerStats.gamesPlayed}</p>
                                            <p className="text-sm uppercase">played</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl">{props.playerStats.gamesWon}</p>
                                            <p className="text-sm uppercase">won</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl">{(props.playerStats.winRate > 0) ? props.playerStats.winRate : "/"}</p >
                                            <p className="text-sm uppercase">%</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl">{props.playerStats.currentStreak}</p>
                                            <p className="text-sm uppercase">current streak</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl">{props.playerStats.recordStreak}</p>
                                            <p className="text-sm uppercase">max streak</p>
                                        </div>
                                    </div>
                                    <h1 className="text-md font-bold text-center uppercase tracking-wider mb-4">Guess distribution</h1>
                                    <div className="mt-8">
                                        <Bar
                                            options={{
                                                indexAxis: 'x',
                                                responsive: true,
                                                scales: {
                                                    y: {
                                                        label: "Guesses",
                                                        min: 0,
                                                        max: (props.playerStats.gamesPlayed > 4) ? props.playerStats.gamesPlayed : 6,
                                                        ticks: {
                                                            precision: 0
                                                        }

                                                    }


                                                }
                                            }}
                                            datasetIdKey='id'
                                            data={{
                                                datasets: [
                                                    {
                                                        id: 1,
                                                        label: 'Games won',
                                                        data: props.playerStats.previousGames,
                                                        backgroundColor: "#538d4e"
                                                    },

                                                ],
                                            }}
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <button onClick={() => { Object.values(console.log(props.playerStats.previousGames)) }} className="flex mt-4 bg-tile-correct-green hover:bg-green-800 px-2 py-2 rounded-md">
                                            <span className="font-bold uppercase mr-2">Share</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>





                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
