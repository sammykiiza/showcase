import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect } from 'react'
import { useAppDispatch } from '../../../App/hooks';
import { checkFilterLocalStorage } from '../../Helpers';
import { apiFilterMenu } from '../../Services';
import { setFiscalYear, setRegion, setCouncil } from './filterMenuSlice';

/**
 * @description The filter menu component that contains 3 three select menus for the Fiscal years, Regions and Councils.
 * This is where the user sets their preferred or current location. The select menus are concatenated
 * so that the user will not have values in the next select menu unless they have selected a value from the previous menu. 
 * @returns 
 */
function FilterMenu() {
    const fiscalYears = apiFilterMenu.useFiscalYearsQuery();

    const [triggerRegions, regions] = apiFilterMenu.useLazyRegionsQuery(undefined);

    const [triggerLocations, locations] = apiFilterMenu.useLazyLocationsQuery(undefined);

    const fiscalYear = localStorage.getItem('fiscalYear');
    const region = localStorage.getItem('region');
    const council = localStorage.getItem('council');


    useEffect(() => {
        checkFilterLocalStorage();
    },
        [fiscalYear, region, council]
    );
    const dispatch = useAppDispatch();
    return (
        <>
            <Transition appear show={!checkFilterLocalStorage()} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={checkFilterLocalStorage}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h1"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Choose Your Location
                                    </Dialog.Title>
                                    <Transition.Child
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <div className="mt-4 mx-2 mb-8">
                                            <select
                                                className="px-8 py-2 mt-2 mr-3 focus:border-none focus:ring-black"
                                                onChange={(e) => {
                                                    dispatch(setFiscalYear(e.currentTarget.value));
                                                    localStorage.removeItem('region');
                                                    localStorage.removeItem('council');
                                                }}
                                            >
                                                <option value={"0"}>Fiscal Years:</option>
                                                {fiscalYears?.data?.map((year) => (
                                                    <option key={year.id} value={year.id}>{year.name}</option>
                                                ))}
                                            </select>

                                            <select
                                                className="form-multiselect px-8 py-2 mt-2 mr-3 focus:border-none focus:ring-black"
                                                name="Region"
                                                id="region"
                                                onMouseEnter={async () => { await triggerRegions().unwrap() }}
                                                onChange={(e) => {
                                                    dispatch(setRegion(e.currentTarget.value))
                                                }}
                                            >
                                                {regions.currentData === undefined ||
                                                    regions.isFetching || regions.isLoading || !regions.isSuccess ? <option>Loading...</option> : <option value="0">Regions:</option>}
                                                {regions.data?.map((region) => (
                                                    <option key={region.id} value={region.id}>{region.name}</option>
                                                ))}
                                            </select>

                                            <select
                                                className="form-multiselect px-8 py-2 mt-2 focus:border-none focus:ring-black"
                                                name="Council"
                                                id="council"
                                                onMouseEnter={async () => { await triggerLocations().unwrap() }}
                                                onChange={(e) => dispatch(setCouncil(e.currentTarget.value))}
                                            >
                                                {locations.currentData === undefined || locations.isFetching
                                                    || locations.isLoading || !locations.isSuccess ? <option>Loading</option> : <option value="0">Council:</option>}
                                                {locations.data?.map((location) => (
                                                    <option key={location.id} value={[location.id, location.name]} >{location.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </Transition.Child>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default FilterMenu