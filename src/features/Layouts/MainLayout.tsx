import React from 'react'
import ChangeLocationButton from '../location/ChangeLocationButton'
import FilterMenu2 from '../menus/fiterMenu/FilterMenu2'
import NavBar from '../menus/NavBar'
// import FilterMenu from '../menus/fiterMenu/FilterMenu'
// import SideMenu from '../menus/SideMenu'
import SideMenu2 from '../menus/SideMenu2'

type Props = {
  children?: React.ReactNode
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
      <div className='mx-[2%] md:ml-[28%] xl:ml-[22%] 2xl:ml-[17%] mt-[1%]'>
        {props.children}
      </div>
    </div>

  )
}

export default MainLayout