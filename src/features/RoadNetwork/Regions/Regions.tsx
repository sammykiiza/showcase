import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import PageTitle from '../../Layouts/titleComponents/PageTitle';
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
      <MainLayout component='Regions view'>
        <PageTitle title='Regions'/>
        <DataTableBase columns={columns} data={data}/>
      </MainLayout>
    </>
  )
}

export default Regions