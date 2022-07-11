import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import NavBar from '../../menus/NavBar'
import DataTableBase from '../../tables/DataTableBase'

function Roads() {
    const data = [
        {
            column: 'Date Uploaded',
            value: 'true',
        },
        {
            column: 'Date Uploaded',
            value: 'fair',
        },
        {
            column: 'Date Uploaded',
            value: 'ask',
        },
        {
            column: 'Date Uploaded',
            value: 'true',
        },
        {
            column: 'Date Uploaded',
            value: 'true',
        },
        {
            column: 'Date Uploaded',
            value: 'true',
        },
        {
            column: 'Date Uploaded',
            value: 'true',
        },
        {
            column: 'Date Uploaded',
            value: 'true',
        },
    ];
    return (
        <>
            <MainLayout>
                <NavBar title="Roads" />
                <DataTableBase data={data}/>
            </MainLayout>
        </>
    )
}

export default Roads