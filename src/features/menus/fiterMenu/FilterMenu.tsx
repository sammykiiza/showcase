import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { checkFilterLocalStorage } from '../../../helpers/functions/checkFilterLocalStorage';
import { RootState } from '../../../app/store'
import { setCouncil, setFiscalYear, setRegion } from './filterMenuSlice';
import { apiFilterMenu, useFiscalYearsQuery } from '../../../services/apiFilterMenu';

function FilterMenu() {
    const menuState:boolean = useAppSelector(((state:RootState) => state.dropDown.closeMenu));
    const dispatch = useAppDispatch();
    const fiscalYear = localStorage.getItem('fiscalYear');
    const region = localStorage.getItem('region');
    const council = localStorage.getItem('council');

    const fiscalYears = useFiscalYearsQuery();

    const [ triggerRegions, regions, promiseRegions ] = apiFilterMenu.useLazyRegionsQuery(undefined);

    const [ triggerLocations, locations, promiseLocations ] = apiFilterMenu.useLazyLocationsQuery(undefined);

    const [ councilName, setCouncilName ] = useState("");

    useEffect(() => {
        checkFilterLocalStorage();
    },
        [fiscalYear, region, council]
    );

    useEffect(() => {
        const splitCouncil = (text:string): string => {
            const array = text?.split(",");
            let name;
            array? name = array[1] : name = "";
            return name;
        }
        council?  setCouncilName(splitCouncil(council)) : console.log('No location');
    },
        [council]
    );

    const changeLocation = () => {
        localStorage.clear();
        window.location.reload();
    }

  return (
    <>
        <div className='flex'>
            <button
            className={(checkFilterLocalStorage()? 'block ml-[16%] relative border-2 border-indigo-700' + 
            ' rounded-full text-indigo-700 p-2 mt-1 hover:text-black' : 'hidden')}
            onClick={changeLocation}
            >
                Change Location
            </button>
            <h1 className='pt-3 pl-4 text-xl'>Current Location:</h1>
            <span className='pt-3 pl-2 text-xl font-bold'>{councilName}</span>
        </div>
        
        <div className={(menuState ?
            'transform transition ease-in-out duration-300 -translate-x-[20%]' :
            'transform transition ease-in-out duration-300 translate-x-0') + ' flex' +
            (checkFilterLocalStorage() ? ' hidden' : ' block absolute top-[0%] left-[0%] bg-black opacity-80 h-[100%] w-[100%] z-[1000]')
        }>
            <div className='mt-[10%] ml-[35%] rounded-lg bg-white w-[500px] h-[300px]'>
                <div className='py-[15%] pl-[6.5%]'>
                    <h1 className='pl-[28%] text-xl'>Choose your location</h1>
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
                        className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3"
                        name="Council"
                        id="council"
                        onMouseEnter={async () => { await triggerLocations().unwrap() }}
                        onChange={(e) => dispatch(setCouncil(e.currentTarget.value))}
                    >
                        {locations.currentData === undefined || locations.isFetching
                            || locations.isLoading || !locations.isSuccess ? <option>Loading</option> : <option value="0">Council*</option>}
                        {locations.data?.map((location) => (
                            <option key={location.id} value={ [location.id, location.name] } >{location.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default FilterMenu