import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import NavBar from '../../menus/NavBar';
import DataTableBase from '../../tables/DataTableBase';

function Regions() {
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
];

const data = [
    {   
        value: 'value1',
        cell: 'test1'
    },
    {
        value: 'value2',
        cell: 'test2'
    },
    {
        value: 'value3',
        cell: 'test3'
    },
    {
        value: 'value4',
        cell: 'test4'
    }
]
  return (
    <>
      <MainLayout>
        <NavBar />
        <DataTableBase columns={columns} data={data}/>
      </MainLayout>
    </>
  )
}

export default Regions