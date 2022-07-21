import React from 'react'
import { objectFilter } from '../../../helpers/functions/objectFilter';
import { useRoadsQuery } from '../../../services/apiAuth';
import MainLayout from '../../Layouts/MainLayout'
import PageTitle from '../../Layouts/titleComponents/PageTitle';
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

    const { data } = useRoadsQuery();

    const object = {one: '1', two: '2', three: '3'}
    objectFilter(object, ['two']);
    // console.log(result);

    return (
        <>
            <MainLayout component='Roads view'>
                <PageTitle title='Roads'/>
                <DataTableBase columns={columns} data={data}/>
            </MainLayout>
        </>
    )
}

export default Roads