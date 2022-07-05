import React, { useEffect } from 'react'
import { checkFilterLocalStorage } from '../../helpers/functions/checkFilterLocalStorage';

function ChangeLocationButton() {

    const fiscalYear = localStorage.getItem('fiscalYear');
    const region = localStorage.getItem('region');
    const council = localStorage.getItem('council');

    const changeLocation = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        checkFilterLocalStorage();
    },
        [fiscalYear, region, council]
    );

    return (
        <div className={(checkFilterLocalStorage() ? "block pl-2" : "hidden")}>
            <button onClick={changeLocation} type="button" className="inline-block px-6 py-2.5 bg-indigo-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">
                Change Location
            </button>
            <span className='p-2 text-indigo-900'>Current Location: {council}</span>
        </div>
    )
}

export default ChangeLocationButton