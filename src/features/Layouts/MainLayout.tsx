import React from 'react'
import SideMenu from '../menus/SideMenu'

type Props = {
    children?: React.ReactNode
}

function MainLayout(props:Props) {
  return (
      <>
      <div className='absolute ml-[32%] md:ml-[18%]'>
        {props.children}
      </div>
      <SideMenu/>
      </>

  )
}

export default MainLayout