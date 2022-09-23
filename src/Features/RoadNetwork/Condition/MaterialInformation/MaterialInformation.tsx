import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DateTime } from 'luxon';
import React from 'react'
import { OtherPagesLayout } from '../../../../Core/Layouts'
import { apiFilterMenu } from '../../../../Core/Services'

function MaterialInformation() {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1,
            minWidth: 150,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },
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
            field: 'roadSection',
            headerName: 'Road Section',
            flex: 1, minWidth: 100,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },
    ];
    const { data: rows = [] } = apiFilterMenu.useMaterialInformationQuery();

    return (
        <OtherPagesLayout
            component='Material Information'
            section='Road Network'
            searchButton='Material Information'
        >
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
    )
}

export default MaterialInformation