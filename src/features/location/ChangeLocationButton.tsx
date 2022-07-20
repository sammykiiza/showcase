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
        <div className={(checkFilterLocalStorage() ? "block pl-2" : "hidden")}>
            <span className='p-2 text-indigo-900'>Settings: {councilName}</span>
            <button onClick={changeLocation} type="button" className="inline-block px-6 py-2.5 bg-indigo-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">
                Update
            </button>
        </div>
    )
}

export default ChangeLocationButton