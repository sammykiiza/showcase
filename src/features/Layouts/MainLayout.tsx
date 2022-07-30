import React from 'react'
import ChangeLocationButton from '../location/ChangeLocationButton'
import FilterMenu2 from '../menus/fiterMenu/FilterMenu2'
import NavBar from '../menus/NavBar'
import SideMenu from '../menus/SideMenu'
import SideMenuMobile from '../menus/SideMenuMobile/SideMenuMobile'
import PageTitle from './titleComponents/PageTitle'

type Props = {
  children?: React.ReactNode,
  component: string
}

function MainLayout(props: Props) {
  return (
    <div className='bg-slate-100 h-[100vh] w-screen'>
      <div>
        <NavBar />
      </div>
      <FilterMenu2 />
      <div className='grid grid-cols-6'>
        <div style={{zIndex:1}}>
          <SideMenuMobile />
          <SideMenu />
        </div>
        <div className='col-start-1 md:col-start-2 md:ml-28 xl:ml-8 2xl:-ml-[1%] col-span-full mt-1'>
          <div className='grid'>
            <div className='inline-block justify-self-end'>
              <ChangeLocationButton />
            </div>
            <div className='-mt-6'>
              <PageTitle title={props.component} />
            </div>
            <div className='border border-slate-300 md:rounded-md h-auto w-full md:w-[99%] justify-self-center'>
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