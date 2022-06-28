import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import FilterMenu from '../menus/fiterMenu/FilterMenu'
import SideMenu from '../menus/SideMenu'

type Props = {
    children?: React.ReactNode
}

function MainLayout(props:Props) {
  const menuState = useAppSelector((state:RootState) => state.dropDown.closeMenu);
  return (
      <>
      <FilterMenu />
      <div className={(menuState? 'md:ml-[2%] ml-[2%]' : '') + ' absolute ml-[32%] md:ml-[18%]'}>
        {props.children}
      </div>
      <SideMenu/>
      </>

  )
}

export default MainLayout