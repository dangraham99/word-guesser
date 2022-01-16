import React from 'react'
import PageHeader from './partials/PageHeader'
import Footer from './partials/Footer'
import { Trans, useTranslation } from 'react-i18next'


function About() {

    const { t } = useTranslation()

    return (

        <div className="flex flex-col justify-between h-screen ">
            <div>
                <PageHeader title={t('about.heading')} />
                <div className="text-sm mx-4 md:mx-0">
                    <div className="mb-8 text-sm">
                        <p><Trans components={{ l: <a href="https://www.powerlanguage.co.uk/wordle/" className="font-bold underline text-white" />, bold: <strong /> }} i18nKey={'about.introPara'} t={t}>This project is the same concept as the original WORDLE game designed by @powerlanguage. Check it out if you enjoyed this.</Trans></p>
                    </div>
                    <div>
                        <h2 className='font-bold text-base mb-2'>{t('about.howToHeading')} </h2>
                        <p className="text-sm"><Trans i18nKey={'about.howToPara'} t={t} components={{ bold: <strong /> }}>Players have <strong>six</strong> attempts to guess the five letter word. Once players make their guess, the tiles will change colour depending on how close your guess was to the word. You can then use this information for your next guess...</Trans></p>
                        <h2 className='font-bold text-base my-4'>{t('about.exampleHeading')}: </h2>
                        <div className="space-y-4 pb-4 border-b border-neutral-400">
                            <div className='space-y-1'>
                                <div className="flex space-x-1">
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess1.tile1')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold  bg-tile-correct-green">{t('about.exampleGuess1.tile2')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess1.tile3')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess1.tile4')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess1.tile5')}</div>
                                </div>
                                <p><Trans i18nKey={'about.exampleGuess1.hint'} t={t} components={{ bold: <strong /> }}>The letter <strong>A</strong> is in the word, in the correct place</Trans></p>
                            </div>
                            <div className='space-y-1'>
                                <div className="flex space-x-1">
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess2.tile1')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess2.tile2')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess2.tile3')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold  bg-tile-exists-yellow">{t('about.exampleGuess2.tile4')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess2.tile5')}</div>
                                </div>
                                <p><Trans i18nKey={'about.exampleGuess2.hint'} t={t} components={{ bold: <strong /> }}>The letter <strong>O</strong> is in the word but not at that place.</Trans></p>
                            </div>
                            <div className='space-y-1'>
                                <div className="flex space-x-1">
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess3.tile1')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold  border border-neutral-600">{t('about.exampleGuess3.tile2')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess3.tile3')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold bg-neutral-700">{t('about.exampleGuess3.tile4')}</div>
                                    <div className="flex h-10 w-10 spacing-10 gap-1 justify-center items-center text-center text-2xl font-bold border border-neutral-600">{t('about.exampleGuess3.tile5')}</div>
                                </div>
                                <p><Trans i18nKey={'about.exampleGuess3.hint'} t={t} components={{ bold: <strong /> }}>The letter <strong>S</strong> is not in the word at all.</Trans></p>
                            </div>
                        </div>
                        <p className="font-bold mt-2">{t('about.newPuzzle')}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    )
}

export default About
