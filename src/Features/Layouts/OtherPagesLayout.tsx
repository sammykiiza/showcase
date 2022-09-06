import React from 'react'
import { MainLayoutProps } from '../../Types/LayoutProps/mainLayoutProps'
import ChangeLocationButton from '../Location/ChangeLocationButton'
import FilterMenu from '../Menus/FiterMenu/FilterMenu'
import NavBar from '../Menus/NavBar'
import SideMenu from '../Menus/SideMenu/SideMenu'
import SideMenuMobile from '../Menus/SideMenuMobile/SideMenuMobile'
import Search from '../Miscalleneous/Search'
import PageTitle from './TitleComponents/PageTitle'

interface Props extends MainLayoutProps {
    searchButton: string
}

function OtherPagesLayout(props: Props) {
    return (
        <div className='bg-slate-100 h-[100vh] w-screen'>
            <FilterMenu />
            <div className='flex'>
                <div style={{ zIndex: 1 }}>
                    <SideMenuMobile />
                    <SideMenu />
                </div>
                {/* md:translate-y-0 ease-linear duration-400 */}
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
                        <div className='border border-slate-300 md:rounded-md h-auto w-full mr-3 ml-1 justify-self-center mb-2'>
                            <Search title={props.searchButton} />
                        </div>
                        <div className='border border-slate-300 md:rounded h-auto w-full mr-3 ml-1 justify-self-center'>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OtherPagesLayout