import React from 'react'
import FilterMenu2 from '../menus/fiterMenu/FilterMenu2'
// import FilterMenu from '../menus/fiterMenu/FilterMenu'
// import SideMenu from '../menus/SideMenu'
import SideMenu2 from '../menus/SideMenu2'

type Props = {
    children?: React.ReactNode
}

function MainLayout(props:Props) {
  return (
      <>
      <FilterMenu2 />
      <SideMenu2/>
      <div>
        {props.children}
      </div>
      </>

  )
}

export default MainLayout