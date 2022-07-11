import React from 'react';

interface TableProps {
    title?: string,
    data: {
        column: string
        value: string
    }[]
}

function DataTableBase(props: TableProps) {
    return (
        <div className='h-[88vh]'>
            <div className="flex flex-col">
                <div className="overflow-x-auto lg:w-auto md:w-[80%] sm:-mx-6 md:-mx-16 lg:-mx-0 lg:ml-auto md:ml-[10%]">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>{props.data.map((data)=>(
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        {data.column}
                                    </th>
                                    ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.data.map((data) => (
                                        <tr key={data.column} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td key={data.column} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.value}</td>
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