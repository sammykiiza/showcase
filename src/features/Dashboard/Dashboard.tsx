import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import FilterMenu from '../menus/fiterMenu/FilterMenu';
import NavBar from '../menus/NavBar'
import DataTableBase from '../tables/DataTableBase';

function Dashboard() {

  const data = [
    {
      column: 'Date Uploaded',
      value: 'true',
    },
    {
      column: 'Road Number',
      value: 'true'
    },
    {
      column: 'Road Name',
      value: 'true'
    },
    {
      column: 'Road Type',
      value: 'true'
    },
    {
      column: 'Segment Number',
      value: 'true'
    },
    {
      column: 'Start(KM)',
      value: 'true'
    },
    {
      column: 'End(KM)',
      value: 'true'
    },
    {
      column: 'Road Condition Index',
      value: 'true'
    },
  ];
  return (
    <>
      <NavBar title="Dashboard" />
      <MainLayout>
        <FilterMenu />
        <DataTableBase data={data} />
        <span>Dashboard</span>
      </MainLayout>
    </>
  )
}

export default Dashboard