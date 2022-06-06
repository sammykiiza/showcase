import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store'

function FilterMenu() {
    const menuState = useAppSelector(((state:RootState) => state.dropDown.closeMenu));
  return (
    <div className={(menuState? 'transform transition ease-in-out duration-300 -translate-x-[40%]' : 'transform transition ease-in-out duration-300 translate-x-0')}>
        <div className='flex'>
            <select
            className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
            name="Fiscal Year"
            id="fiscal-year">
                <option selected>Fiscal Year*</option>
                <option value="2022">2022</option>
            </select>

            <select
            className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
            name="Region"
            id="region">
                <option selected>Region*</option>
                <option value="lusaka">Lusaka</option>
            </select>

            <select
            className="form-multiselect px-8 py-2 mt-2 rounded-full mr-3" 
            name="Council"
            id="council">
                <option selected>Council*</option>
                <option value="Chongwe">Chongwe</option>
            </select>
        </div>
    </div>
  )
}

export default FilterMenu