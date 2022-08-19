import React from 'react';
import { useRoadsQuery } from '../../../services/apiAuth';
import MainLayout from '../../Layouts/MainLayout';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function Roads() {
    const columns: GridColDef[] = [
        { field: 'dateCreated', headerName: 'Date Uploaded', width: 200, type: 'dateTime'},
        { field: 'roadCode', headerName: 'Road Number', width: 150 },
        { field: 'roadName', headerName: 'Road name', width: 200 },
        { field: 'roadTypeId', headerName: 'Road Type', width: 200 },
        { field: 'roadSectionNumber', headerName: 'Segment Number', width: 150, },
        { field: 'fromChainage', headerName: 'Start (KM)', width: 80 },
        { field: 'toChainage', headerName: 'End (KM)', width: 80 },
        { field: 'conditionIndex', headerName: 'Road Condition Index', width: 150 },
    ];

    const { data:rows = [] } = useRoadsQuery();
    // console.log(rows);

    return (
        <>
            <MainLayout component='Roads' section='Road Network'>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </MainLayout>
        </>
    )
}

export default Roads