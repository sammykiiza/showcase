import React from 'react'
import { objectFilter } from '../../../helpers/functions/objectFilter';
import { useRoadsQuery } from '../../../services/apiAuth';
import MainLayout from '../../Layouts/MainLayout'
import NavBar from '../../menus/NavBar'
import DataTableBase from '../../tables/DataTableBase'

function Roads() {
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

    const response = [
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

    const { data, error } = useRoadsQuery();

    const object = {one: '1', two: '2', three: '3'}
    objectFilter(object, ['two']);
    // console.log(result);

    return (
        <>
            <MainLayout>
                <NavBar title="Roads" />
                <DataTableBase columns={columns} data={data}/>
            </MainLayout>
        </>
    )
}

export default Roads