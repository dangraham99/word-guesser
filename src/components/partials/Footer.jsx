import React from 'react'
import { Trans, useTranslation } from 'react-i18next'



function Footer() {
    const { t } = useTranslation()
    return (
        <div>
            <div className="text-center mb-8 text-xs">
                <Trans components={{ l1: <a className="text-bold underline text-blue-500 bg:text-white" />, l2: <a className="text-bold underline text-blue-500 bg:text-white" href="https://www.powerlanguage.co.uk/" /> }} t={t} i18nKey={'footerText'} >Developed  by Daniel Graham, inspired by the orginal concept from @powerlanguage</Trans>
            </div>
        </div >
    )
}

export default Footer
