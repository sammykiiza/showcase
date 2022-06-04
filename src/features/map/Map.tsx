import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import FilterMenu from '../Layouts/filterMenu'
import NavBar from '../menus/NavBar'

function Map() {
  return (
    <>
    <NavBar title='Map'/>
    <MainLayout>
    <FilterMenu />
        <>Map</>
    </MainLayout>
    </>
  )
}

export default Map