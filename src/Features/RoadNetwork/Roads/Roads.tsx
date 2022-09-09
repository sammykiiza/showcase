import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DateTime } from "luxon";
import { OtherPagesLayout } from '../../../Core/Layouts';
import { apiAuth } from '../../../Core/Services';

function Roads() {
    const columns: GridColDef[] = [
        {
            field: 'dateCreated',
            headerName: 'Date Uploaded',
            flex: 1,
            minWidth: 150,
            type: 'dateTime',
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center',
            valueFormatter: params => DateTime.fromISO(params?.value).toLocaleString(DateTime.DATETIME_MED),
        },

        {
            field: 'roadCode',
            headerName: 'Road Number',
            flex: 1,
            minWidth: 150,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'roadName',
            headerName: 'Road name',
            flex: 1, minWidth: 100,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'roadTypeId',
            headerName: 'Road Type',
            flex: 1,
            minWidth: 100,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'roadSectionNumber',
            headerName: 'Segment Number',
            flex: 1,
            minWidth: 150,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'fromChainage',
            headerName: 'Start (KM)',
            flex: 1,
            minWidth: 100,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'toChainage',
            headerName: 'End (KM)',
            flex: 1,
            minWidth: 100,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'conditionIndex',
            headerName: 'Road Condition Index',
            flex: 1,
            minWidth: 170,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },
    ];

    const { data: rows = [] } = apiAuth.useRoadsQuery();

    return (
        <>
            <OtherPagesLayout component='Roads' section='Road Network' searchButton='Road'>
                <div style={{ height: "74vh", width: '100%' }}>
                    <DataGrid
                        sx={{
                            '& .MuiDataGrid-cell:hover': {
                                color: '#000',
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