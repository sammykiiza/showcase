import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import NavBar from '../menus/NavBar'

function Dashboard() {
  return (
    <>
    <NavBar title="Dashboard"/>
    <MainLayout>
        <span>Dashboard</span>
    </MainLayout>
    </>
  )
}

export default Dashboard