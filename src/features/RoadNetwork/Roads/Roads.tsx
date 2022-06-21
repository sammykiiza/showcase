import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import FilterMenu from '../../menus/fiterMenu/FilterMenu'
import NavBar from '../../menus/NavBar'
import DataTableBase from '../../tables/DataTableBase'

function Roads() {
const columns = [
    {
        name: 'Date Uploaded',
        sortable: true,
    },
    {
        name: 'Road Number',
        sortable: true
    },
    {
        name: 'Road Name',
        sortable: true
    },
    {
        name: 'Road Type',
        sortable: true
    },
    {
        name: 'Segment Number',
        sortable: true
    },
    {
        name: 'Start(KM)',
        sortable: true
    },
    {
        name: 'End(KM)',
        sortable: true
    },
    {
        name: 'Road Condition Index',
        sortable: true
    },
];

const data = [
    {
        title: 'Beetlejuice',
    },
    {
        title: 'Ghostbusters',
    },
]
  return (
    <>
    <NavBar title="Roads"/>
    <MainLayout>
      <FilterMenu />
      <DataTableBase columns = {columns} data = {data}/>        
        <span>Dashboard</span>
    </MainLayout>
    </>
  )
}

export default Roads