import React from 'react';

interface TableProps {
    title?: string,
    columns: {
        name:string,
        sortable: boolean
    }[],
    data: {
        title: string
    }[]
}

function DataTableBase(props:TableProps) {
    return (
        <div>
            <table className="shadow-lg bg-white mt-2 boarder-collapsed">
                <tr>
                    {props.columns.map((header) => (
                        <th className="bg-blue-700 border text-white px-3 py-4">{header.name}</th>
                    ))}
                </tr>

                {props.data.map((row) => (
                    <tr>    
                        <td className="border px-3 py-4">{row.title}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default DataTableBase;