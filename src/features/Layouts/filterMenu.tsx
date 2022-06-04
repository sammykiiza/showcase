import React from 'react'

function FilterMenu() {
  return (
    <div>
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