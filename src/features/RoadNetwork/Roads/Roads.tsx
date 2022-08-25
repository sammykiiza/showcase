import React from 'react';
import { useRoadsQuery } from '../../../services/apiAuth';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Search from '../../miscalleneous/Search';
import OtherPagesLayout from '../../Layouts/OtherPagesLayout';

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
            <OtherPagesLayout component='Roads' section='Road Network' searchButton='Road'>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </OtherPagesLayout>
        </>
    )
}

export default Roads