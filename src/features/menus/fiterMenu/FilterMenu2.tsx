import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { checkFilterLocalStorage } from '../../../helpers/functions/checkFilterLocalStorage';
import { apiFilterMenu, useFiscalYearsQuery } from '../../../services/apiFilterMenu';
import { setCouncil, setFiscalYear, setRegion } from './filterMenuSlice';

function FilterMenu2() {
    const fiscalYears = useFiscalYearsQuery();

    const [triggerRegions, regions, promiseRegions] = apiFilterMenu.useLazyRegionsQuery(undefined);

    const [triggerLocations, locations, promiseLocations] = apiFilterMenu.useLazyLocationsQuery(undefined);

    const fiscalYear = localStorage.getItem('fiscalYear');
    const region = localStorage.getItem('region');
    const council = localStorage.getItem('council');

    useEffect(() => {
        checkFilterLocalStorage();
    },
        [fiscalYear, region, council]
    );

    const changeLocation = () => {
        localStorage.clear();
        window.location.reload();
    }

    const dispatch = useAppDispatch();
    return (
        <div>
            <div className={(checkFilterLocalStorage()? "absolute left-[26%] top-[2.5%] z-10" : "hidden")}>
                <button onClick={changeLocation} type="button" className="inline-block px-6 py-2.5 bg-indigo-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">
                    Change Location
                </button>
                <span className='p-2 text-indigo-900'>Current Location: {council}</span>
            </div>

            <div className={(checkFilterLocalStorage()? "hidden" :"modal drop-shadow-2xl shadow-black fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto")} id="exampleModalCenter" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-indigo-900" id="exampleModalScrollableLabel">
                                Choose Your Location
                            </h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <select
                                className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3 border-indigo-900"
                                name="Fiscal Year"
                                id="fiscal-year"
                                onChange={(e) => {
                                    dispatch(setFiscalYear(e.currentTarget.value))
                                }}
                            >
                                <option>Fiscal Year*</option>
                                {fiscalYears?.data?.map((year) => (
                                    <option key={year.id} value={year.id}>{year.name}</option>
                                ))}
                            </select>

                            <select
                                className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3 border-indigo-900"
                                name="Region"
                                id="region"
                                onMouseEnter={async () => { await triggerRegions().unwrap() }}
                                onChange={(e) => {
                                    dispatch(setRegion(e.currentTarget.value))
                                }}
                            >
                                {regions.currentData === undefined ||
                                    regions.isFetching || regions.isLoading || !regions.isSuccess ? <option>Loading...</option> : <option value="0">Regions*</option>}
                                {regions.data?.map((region) => (
                                    <option key={region.id} value={region.id}>{region.name}</option>
                                ))}
                            </select>

                            <select
                                className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3 border-indigo-900"
                                name="Council"
                                id="council"
                                onMouseEnter={async () => { await triggerLocations().unwrap() }}
                                onChange={(e) => dispatch(setCouncil(e.currentTarget.value))}
                            >
                                {locations.currentData === undefined || locations.isFetching
                                    || locations.isLoading || !locations.isSuccess ? <option>Loading</option> : <option value="0">Council*</option>}
                                {locations.data?.map((location) => (
                                    <option key={location.id} value={location.name} >{location.name}</option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                className="inline-block px-6 py-2.5 bg-indigo-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu2