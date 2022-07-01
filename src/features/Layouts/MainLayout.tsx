import React from 'react'
// import FilterMenu from '../menus/fiterMenu/FilterMenu'
// import SideMenu from '../menus/SideMenu'
import SideMenu2 from '../menus/SideMenu2'

type Props = {
    children?: React.ReactNode
}

function MainLayout(props:Props) {
  return (
      <>
      {/* <FilterMenu /> */}
      <SideMenu2/>
      <div>
        {props.children}
      </div>
      </>

  )
}

export default MainLayout