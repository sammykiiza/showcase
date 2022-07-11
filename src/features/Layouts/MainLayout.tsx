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
      <div className='grid justify-items-center md:basis-[75.8%] lg:basis-[78%] 2xl:basis-[87%]'>
        {props.children}
      </div>
    </div>

  )
}

export default MainLayout