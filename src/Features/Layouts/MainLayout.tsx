import React from 'react'
import { PageTitle } from '.'
import { MainLayoutProps } from '../../Types/LayoutProps/mainLayoutProps'
import { ChangeLocationButton } from '../Location'
import { FilterMenu, NavBar, SideMenu, SideMenuMobile } from '../Menus'

function MainLayout(props: MainLayoutProps) {
  return (
    <div className='bg-slate-100 h-[100vh] w-screen'>
      <FilterMenu />
      <div className='flex'>
        <div style={{ zIndex: 1 }}>
          <SideMenuMobile />
          <SideMenu />
        </div>
        <div className='-translate-x-60 md:translate-x-0 ease-linear duration-400 basis-full'>
          <div>
            <NavBar />
          </div>

          <div className='grid mt-1 ml-2'>
            <div className='flex justify-between'>
              <div>
                <PageTitle section={props.section} />
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