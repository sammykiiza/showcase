import React from 'react';

interface TableProps {
    title?: string,
    columns: {
        name: string
    }[],
    data: {
        value: string,
        cell: string,
    }[]
}

function DataTableBase(props: TableProps) {
    return (
        <div className='h-[89vh]'>
            <div className="flex flex-col">
                <div className="overflow-x-auto w-[95%] sm:mx-[1%] md:mx-4 lg:mx-4 2xl:-mx-2">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>{props.columns.map((column)=>(
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        {column.name}
                                    </th>
                                    ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.data.map((data, index) => (
                                        <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            {Object.values(data).map((value)=> (
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTableBase;