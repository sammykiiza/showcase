import React from 'react'
import ChangeLocationButton from '../location/ChangeLocationButton'
// import FilterMenu2 from '../menus/fiterMenu/FilterMenu2'
import FilterMenu3 from '../menus/fiterMenu/FilterMenu3'
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
      <FilterMenu3 />
      <div className='grid md:grid-cols-11 2xl:grid-cols-15'>
        <div style={{ zIndex: 1 }}>
          <SideMenuMobile />
          <SideMenu />
        </div>
        {/* md:ml-28 xl:ml-8 2xl:-ml-[1%] */}
        <div className='-translate-y-[93vh] md:translate-y-0 ease-linear duration-400 col-start-1 lg:col-start-3 2xl:col-start-3 col-span-full mt-1'>
          <div className='grid'>
            <div className='flex justify-between'>
              <div>
                <PageTitle title={props.component} />
              </div>
              <div className='inline-block -mt-1 md:mb-4'>
                <ChangeLocationButton />
              </div>
            </div>
            <div className='border border-slate-300 md:rounded h-auto w-full md:w-[99%] mr-3 ml-1 justify-self-center'>
              <div className='bg-white rounded-t p-1 pl-3 border-b-slate-300'>{props.component + ' view'}</div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MainLayout