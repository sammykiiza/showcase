import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { checkFilterLocalStorage } from '../../../helpers/functions/checkFilterLocalStorage';
import { RootState } from '../../../app/store'
import { setCouncil, setFiscalYear, setRegion } from './filterMenuSlice';
import { api, useFiscalYearsQuery } from '../../../services/api';

function FilterMenu() {
    const menuState = useAppSelector(((state:RootState) => state.dropDown.closeMenu));
    const dispatch = useAppDispatch();
    const fiscalYear = localStorage.getItem('fiscalYear');
    const region = localStorage.getItem('region');
    const council = localStorage.getItem('council');

    const fiscalYears = useFiscalYearsQuery();

    const [ triggerRegions, regions, promiseRegions ] = api.useLazyRegionsQuery({refetchOnFocus:true});

    const [ triggerLocations, locations, promiseLocations ] = api.useLazyLocationsQuery({refetchOnFocus:true});

    useEffect(() => {
        checkFilterLocalStorage();
    },
        [fiscalYear, region, council]
    );

    const changeLocation = () => {
        localStorage.clear();
        window.location.reload();
    }

  return (
    <>
        <button
        className={(checkFilterLocalStorage()? 'block' : 'hidden') + 
        ' relative border-2 border-indigo-700 rounded-full text-indigo-700 p-2 mt-1 hover:text-black'}
        onClick={changeLocation}
        >
            Change Location
        </button>

        <div className={(menuState? 
            'transform transition ease-in-out duration-300 -translate-x-[20%]' : 
            'transform transition ease-in-out duration-300 translate-x-0') + ' flex' + 
            (checkFilterLocalStorage()? ' hidden' : ' block')
            }>
            <select
            className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
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
            className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
            name="Region"
            id="region"
            onClick={async () => { await triggerRegions() }}
            onChange={(e) => {
                dispatch(setRegion(e.currentTarget.value))
            }}
            >
                {regions.currentData === undefined || 
                regions.isFetching || regions.isLoading || !regions.isSuccess? <option>Loading...</option> : <option value="0">Regions*</option>}
                {regions.data?.map((region) => (
                    <option key={region.id} value={region.id}>{region.name}</option>
                ))}         
            </select>

            <select
            className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3"
            name="Council"
            id="council"
            onClick={async () => {await triggerLocations()}}
            onChange={(e) => dispatch(setCouncil(e.currentTarget.value))}
            >
                {locations.currentData === undefined || locations.isFetching
                 || locations.isLoading || !locations.isSuccess? <option>Loading</option> : <option value="0">Council*</option>}
                {locations.data?.map((location) => (
                    <option key={location.id} value={location.id}>{location.name}</option>
                ))}
            </select>
        </div>
    </>
  )
}

export default FilterMenu