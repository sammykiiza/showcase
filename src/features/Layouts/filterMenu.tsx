import React from 'react'

function FilterMenu() {
  return (
    <div>
        <div className='flex'>
            <select
            className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            name="Fiscal Year"
            id="fiscal-year">
                <option selected>Fiscal Year</option>
                <option value="2022">2022</option>
            </select>

            <select
            className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            name="Region"
            id="region">
                <option selected>Region</option>
                <option value="lusaka">Lusaka</option>
            </select>

            <select
            className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            name="Council"
            id="council">
                <option selected>Council</option>
                <option value="Chongwe">Chongwe</option>
            </select>
        </div>
    </div>
  )
}

export default FilterMenu