import React from 'react'
import { useRoadsQuery } from '../../../services/apiAuth';
import MainLayout from '../../Layouts/MainLayout'

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

    return (
        <>
            <MainLayout component='Roads'>
            </MainLayout>
        </>
    )
}

export default Roads