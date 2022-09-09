import React from 'react'
import { ObjectType } from '../Types/objectType'

/**
 * @description The search form displayed above the system tables. can be resued in other ares as well.
 * @param props 
 * @returns 
 */
function Search(props: ObjectType) {
    return (
        <div className='bg-white rounded-md'>
            <div>
                <form action="#!" method="post">
                    <div className='flex justify-between'>
                        <div>
                            <label className='p-3'>Search</label>
                            <input className='rounded h-8 m-2 border-[#C3C4C7] border-1' id='search' type="text" />
                        </div>

                        <div className='m-2 bg-[#2271B1] text-white rounded-md hover:text-slate-300'>
                            <button className='px-3 py-1.5 text-sm font-medium h-6'>
                                New {props.title}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search