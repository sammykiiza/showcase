import React from 'react';
import { useRoadsQuery } from '../../../services/apiAuth';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import OtherPagesLayout from '../../Layouts/OtherPagesLayout';

function Roads() {
    const columns: GridColDef[] = [
        { field: 'dateCreated', headerName: 'Date Uploaded', width: 300, type: 'dateTime', headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center'},
        { field: 'roadCode', headerName: 'Road Number', width: 250, headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center' },
        { field: 'roadName', headerName: 'Road name', width: 250, headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center' },
        { field: 'roadTypeId', headerName: 'Road Type', width: 250, headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center' },
        { field: 'roadSectionNumber', headerName: 'Segment Number', width: 250, headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center' },
        { field: 'fromChainage', headerName: 'Start (KM)', width: 90, headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center' },
        { field: 'toChainage', headerName: 'End (KM)', width: 90, headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center' },
        { field: 'conditionIndex', headerName: 'Road Condition Index', width: 190, headerClassName: 'bg-[#2271B1] text-white', headerAlign: 'center', align: 'center' },
    ];

    const { data:rows = [] } = useRoadsQuery();

    return (
        <>
            <OtherPagesLayout component='Roads' section='Road Network' searchButton='Road'>
                <div style={{ height: "74vh", width: '100%' }}>
                    <DataGrid
                        sx={{
                            '& .MuiDataGrid-cell:hover': {
                              color: '#2271B1',
                            },
                          }}
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </OtherPagesLayout>
        </>
    )
}

export default Roads