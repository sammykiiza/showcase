import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store'
import { setCouncil, setFiscalYear, setRegion } from './filterMenuSlice';

function FilterMenu() {
    const menuState = useAppSelector(((state:RootState) => state.dropDown.closeMenu));
    const dispatch = useAppDispatch();
  return (
    <div className={(menuState? 
        'transform transition ease-in-out duration-300 -translate-x-[20%]' : 
        'transform transition ease-in-out duration-300 translate-x-0') + ' flex'}>
        <select
        className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
        name="Fiscal Year"
        id="fiscal-year"
        onChange={(e) => dispatch(setFiscalYear(e.currentTarget.value))}
        >
            <option>Fiscal Year*</option>
            <option value="2022">2022</option>
        </select>

        <select
        className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
        name="Region"
        id="region"
        onChange={(e) => dispatch(setRegion(e.currentTarget.value))}
        >
            <option>Region*</option>
            <option value="lusaka">Lusaka</option>
        </select>

        <select
        className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
        name="Council"
        id="council"
        onChange={(e) => dispatch(setCouncil(e.currentTarget.value))}
        >
            <option>Council*</option>
            <option value="Chongwe">Chongwe</option>
        </select>
    </div>
  )
}

export default FilterMenu