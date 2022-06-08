import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store'
import { setCouncil, setEmpty, setFiscalYear, setRegion } from './filterMenuSlice';

function FilterMenu() {
    const menuState = useAppSelector(((state:RootState) => state.dropDown.closeMenu));
    const empty = useAppSelector((state:RootState) => state.filterMenu.empty);
    const dispatch = useAppDispatch();

    function checkFilterMenuValues(): boolean 
    {
        if(localStorage.getItem('fiscalYear')==='' || localStorage.getItem('region')==='' || localStorage.getItem('council')==='') 
        {
            return true;
        }
        dispatch(setEmpty());
        return false;
    }
  return (
      <>
        <div className={(checkFilterMenuValues()? 'block': 'hidden')}>
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
        </div>
      </>
  )
}

export default FilterMenu