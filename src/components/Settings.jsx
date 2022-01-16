import React from 'react'
import PageHeader from './partials/PageHeader'
import Footer from './partials/Footer'
import SwitchToggle from './partials/SwitchToggle'

function Settings() {
    return (
        <div>
            <div className="flex flex-col justify-between h-screen">
                <div>
                    <PageHeader title={"Settings"} />
                    <div className="text-sm">
                        <div className="mb-8 text-sm space-y-4">
                            <div className="flex  border-b border-neutral-700 justify-between items-center">
                                <div className='ml-4 pb-2'>
                                    <h2 className="text-xl">Dark mode</h2>
                                    <p className="text-sm text-neutral-500">Turns on a dark colour theme </p>
                                </div>
                                <SwitchToggle />
                            </div>
                            <div className="flex   border-b border-neutral-700 justify-between items-center">
                                <div className='ml-4 pb-2'>
                                    <h2 className="text-xl">High contrast mode</h2>
                                    <p className="text-sm text-neutral-500">High contrast colour theme</p>
                                </div>
                                <SwitchToggle />
                            </div>
                            <div className="flex  border-b border-neutral-700 justify-between items-center">
                                <div className='ml-4 pb-2 space-y-2'>
                                    <div>
                                        <h2 className="text-xl">Select locale</h2>
                                        <p className="text-sm text-neutral-500">Changes the language and available keyboards</p>
                                    </div>
                                    <div class="inline-flex rounded-md shadow-sm" role="group">
                                        <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-neutral-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-neutral-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                            English
                                        </button>

                                        <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-neutral-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-neutral-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                            Deutsch
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Settings
