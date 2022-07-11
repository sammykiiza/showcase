import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import FilterMenu from '../menus/fiterMenu/FilterMenu';
import NavBar from '../menus/NavBar'
import DataTableBase from '../tables/DataTableBase';

function Dashboard() {

  const columns = [
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
    {
        name: 'Date Uploaded',
    },
];

const data = [
    {   
        value: 'value1',
        cell: 'test'
    },
    {
        value: 'value2',
        cell: 'test'
    },
    {
        value: 'value3',
        cell: 'test'
    },
    {
        value: 'value4',
        cell: 'test'
    }
]
  return (
    <>
      <NavBar title="Dashboard" />
      <MainLayout>
        <FilterMenu />
        <DataTableBase columns={columns} data={data} />
        <span>Dashboard</span>
      </MainLayout>
    </>
  )
}

export default Dashboard