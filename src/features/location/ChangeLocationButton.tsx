import React, { useEffect, useState } from 'react'
import { checkFilterLocalStorage } from '../../helpers/functions/checkFilterLocalStorage';
import { splitString } from '../../helpers/functions/splitString';

function ChangeLocationButton() {

    const fiscalYear = localStorage.getItem('fiscalYear');
    const region = localStorage.getItem('region');
    const council = localStorage.getItem('council');
    const [ councilName, setCouncilName ] = useState("");

    const changeLocation = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        checkFilterLocalStorage();
    },
        [fiscalYear, region, council]
    );

    useEffect(() => {
        council?  setCouncilName(splitString(council, 1)) : console.log('No location');
    },
        [council]
    );

    return (
        <div className={(checkFilterLocalStorage() ? "block p-2 md:mr-4 rounded-md border border-slate-300 bg-white" : "hidden")}>
            <span className='pr-2 text-md'>Settings: {councilName}</span>
            <button onClick={changeLocation} type="button" className="inline-block px-4 py-1 bg-[#2271B1] text-white font-medium text-sm leading-tight rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">
                Update
            </button>
        </div>
    )
}

export default ChangeLocationButton