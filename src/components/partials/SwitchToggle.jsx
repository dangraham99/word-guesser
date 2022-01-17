import { useState } from 'react'
import { Switch } from '@headlessui/react'


function SwitchToggle() {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`transform transition ease-in-out duration-200 ${enabled ? 'bg-green-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11`}
        >

            <span
                className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
        </Switch>
    )
}
export default SwitchToggle