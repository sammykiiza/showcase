import React from 'react'
import ChangeLocationButton from '../location/ChangeLocationButton'
import FilterMenu2 from '../menus/fiterMenu/FilterMenu2'
import NavBar from '../menus/NavBar'
// import FilterMenu from '../menus/fiterMenu/FilterMenu'
// import SideMenu from '../menus/SideMenu'
import SideMenu2 from '../menus/SideMenu2'

type Props = {
  children?: React.ReactNode,
  component: string
}

function MainLayout(props: Props) {
  return (
    <div className='grid grid-cols-1 content-start bg-slate-100 h-screen w-screen'>
      <FilterMenu2 />
      <div>
        <NavBar />
        <SideMenu2 />
      </div>
      <div className='place-self-end'>
        <ChangeLocationButton />
      </div>
      <div className='mx-4 md:ml-[21%] xl:ml-[19%] 2xl:ml-[14%] mt-[1%] border border-slate-300 rounded-md h-[70%]'>
        <div className='bg-white rounded-t-md p-1 border-b-slate-300'>{props.component}</div>
        {props.children}
      </div>
    </div>

  )
}

export default MainLayout