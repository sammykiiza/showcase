import React from 'react'
import MainLayout from '../../Layouts/MainLayout';

function RoadTypes() {
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
    <div>
      <MainLayout component='Road Types'>
      </MainLayout>
    </div>
  )
}

export default RoadTypes