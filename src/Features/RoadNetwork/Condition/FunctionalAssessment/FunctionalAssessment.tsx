import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DateTime } from 'luxon';
import React from 'react'
import { OtherPagesLayout } from '../../../../Core/Layouts'
import { apiFilterMenu } from '../../../../Core/Services'

function FunctionalAssessment() {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'id',
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
            flex: 1, 
            minWidth: 100,
            headerClassName: 'bg-[#2271B1] text-white',
            headerAlign: 'center',
            align: 'center'
        },
    ];
    const { data: rows = [] } = apiFilterMenu.useFunctionalAssessmentsQuery();
    const { data: roadSections = [] } = apiFilterMenu.useRoadSectionsQuery();

    const data = rows.map(row => {
        const roadSection = roadSections.find(roadSection => roadSection.id === row.roadSectionId);
        return {...row, roadSection: roadSection?.roadName}
      });
      
    return (
        <OtherPagesLayout
            component='Functional Assessment'
            section='Road Network'
            searchButton='Functional Assessment'
        >
            <div style={{ height: "74vh", width: '100%' }}>
                <DataGrid
                    sx={{
                        '& .MuiDataGrid-cell:hover': {
                            color: '#000',
                        },
                    }}
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </OtherPagesLayout>
    )
}

export default FunctionalAssessment