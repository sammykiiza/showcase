import React, { useEffect, useState } from 'react'
import { checkFilterLocalStorage, splitString } from '../Helpers';

/**
 * @description This is the component that triggers the clearing of the currently selected location so that the user can access the filterMenu to select a new location.
 * @returns 
 */
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
        <div className={(checkFilterLocalStorage() ? "inline-block p-2  md:mr-1 md:rounded border border-slate-300 bg-white" : "hidden")}>
            <span className='pr-2 text-md'>Settings: {councilName}</span>
            <button onClick={changeLocation} type="button" className="inline-block px-4 py-1 bg-[#2271B1] text-white font-medium text-sm leading-tight rounded-md shadow-md hover:text-slate-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                Update
            </button>
        </div>
    )
}

export default ChangeLocationButton