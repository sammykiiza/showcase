import React from 'react'
import ChangeLocationButton from '../location/ChangeLocationButton'
import FilterMenu2 from '../menus/fiterMenu/FilterMenu2'
import NavBar from '../menus/NavBar'
import SideMenu2 from '../menus/SideMenu2'
import PageTitle from './titleComponents/PageTitle'

type Props = {
  children?: React.ReactNode,
  component: string
}

function MainLayout(props: Props) {
  return (
    <div className='bg-slate-100 h-screen w-screen'>
      <FilterMenu2 />
      <div>
        <NavBar />
      </div>
      <div className='grid grid-cols-6'>
        <div>
          <SideMenu2 />
        </div>
        <div className='col-start-1 md:col-start-2 md:ml-28 xl:ml-8 2xl:-ml-[1%] col-span-full'>
          <div className='grid'>
            <div className='inline-block justify-self-end'>
              <ChangeLocationButton />
            </div>
            <div className='-mt-2'>
              <PageTitle title={props.component} />
            </div>
            <div className='border border-slate-300 rounded-md h-auto w-full md:w-[99%]'>
              <div className='bg-white rounded-t-md p-1 pl-3 border-b-slate-300'>{props.component + ' view'}</div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MainLayout