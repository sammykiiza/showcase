import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DateTime } from 'luxon';
import React from 'react'
import { OtherPagesLayout } from '../../../../Core/Layouts'
import { apiFilterMenu } from '../../../../Core/Services'

function Locations() {
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
      field: 'name',
      headerName: 'Name',
      flex: 1, minWidth: 100,
      headerClassName: 'bg-[#2271B1] text-white',
      headerAlign: 'center',
      align: 'center'
    },
  ];
  const { data: rows = [] } = apiFilterMenu.useLocationsQuery();
  return (
    <>
      <OtherPagesLayout
        component='Locations'
        section='Road Network'
        searchButton='Location'
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
    </>
  )
}

export default Locations