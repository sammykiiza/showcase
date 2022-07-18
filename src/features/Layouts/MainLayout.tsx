import React from 'react'
import FilterMenu2 from '../menus/fiterMenu/FilterMenu2'
// import FilterMenu from '../menus/fiterMenu/FilterMenu'
// import SideMenu from '../menus/SideMenu'
import SideMenu2 from '../menus/SideMenu2'

type Props = {
  children?: React.ReactNode
}

function MainLayout(props: Props) {
  return (
    <div className='flex justify-between bg-slate-100 h-screen w-screen'>
      <FilterMenu2 />
      <SideMenu2 />
      <div className='sm:w-screen md:w-[73%] lg:w-[76.5%] xl:w-[80%] 2xl:w-[83%]'>
      {/* sm:w-screen md:w-[73%] lg:w-[76.5%] xl:w-[80%] 2xl:w-[83%] */}
          {props.children}
      </div>
    </div>

  )
}

export default MainLayout