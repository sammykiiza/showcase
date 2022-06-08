import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import FilterMenu from '../menus/fiterMenu/FilterMenu'
import NavBar from '../menus/NavBar'
import Table from '../tables/DataTableBase'

function Map() {
  const columns = [
    {
        name: 'Date Uploaded',
        selector: (row:{title:string}) => row.title,
        sortable: true,
    },
    {
        name: 'Road Number',
        selector: (row:{year: string}) => row.year,
        sortable: true
    },
    {
      name: 'Road Name',
      selector: (row:{year: string}) => row.year,
      sortable: true
  },
  {
    name: 'Road Type',
    selector: (row:{year: string}) => row.year,
    sortable: true
  },
  {
    name: 'Segment Number',
    selector: (row:{year: string}) => row.year,
    sortable: true
  },
  {
    name: 'Start(KM)',
    selector: (row:{year: string}) => row.year,
    sortable: true
  },
  {
    name: 'End(KM)',
    selector: (row:{year: string}) => row.year,
    sortable: true
  },
  {
    name: 'Road Condition Index',
    selector: (row:{year: string}) => row.year,
    sortable: true
  },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

  return (
    <>
    <NavBar title='Map'/>
    <MainLayout>
      <FilterMenu />
      <Table columns = {columns} data = {data}/>
    </MainLayout>
    </>
  )
}

export default Map