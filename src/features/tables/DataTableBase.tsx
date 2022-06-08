import DataTable from 'react-data-table-component';

interface TableProps {
    title?: string,
    columns: {}[],
    data: {}[]
}

function DataTableBase(props:TableProps) {
    return (
        <DataTable
            title = {props.title}
            columns={props.columns}
            data={props.data}
            pagination
        />
    );
};

export default DataTableBase;