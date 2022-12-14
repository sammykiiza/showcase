import React from 'react'
import { PageTitle } from '.'
import { ChangeLocationButton } from '../Location'
import { FilterMenu, NavBar, SideMenu, SideMenuMobile } from '../Menus'
import { Search } from '../Miscalleneous'
import { MainLayoutProps } from '../Types/LayoutProps/mainLayoutProps'

/**
 * @interface
 * @description Props Interface used in the OtherPagesLayout component for all this layout's props. 
 * It extends the MainLayoutProps interface to add a searchButton property which takes the name that will be displayed
 * in the button in the Search component e.g searchButton = Road will set the button to 'New Road'
 */
interface OtherPagesLayoutProps extends MainLayoutProps {
    searchButton: string
}

/**
 * @description This is the layout used by the other components that include a table and need the use of the Search component.
 * @param props 
 * @returns 
 */
function OtherPagesLayout(props: OtherPagesLayoutProps) {
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