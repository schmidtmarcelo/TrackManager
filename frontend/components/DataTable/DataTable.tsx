import React from 'react';

interface DataTableProps {
  data: {
    [key: string]: string | number;
  }[];
  columns: {
    key: string;
    title: string;
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <div className="p-1.5 w-full inline-block align-middle">
        <div className="overflow-hidden border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="bg-gray-200 text-gray-800">
                <th scope="col" className="py-3 pl-4">
                  <div className="flex items-center h-5">
                    <input id="checkbox-all" type="checkbox"
                      className="text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                    <label htmlFor="checkbox" className="sr-only">
                      Checkbox
                    </label>
                  </div>
                </th>
                {columns.map((column) => (
                  <th key={column.key} className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    <span className="inline-flex items-center">
                      {column.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </span>
                  </th>
                ))}
                <th scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                  Edit
                </th>
                <th scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                      <label htmlFor="checkbox" className="sr-only"> Checkbox </label>
                    </div>
                  </td>
                  {columns.map((column) => (
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {row[column.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">Edit</a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <table className="table-auto p-3">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2 text-left font-bold">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="text-gray-700">
              {columns.map((column) => ( 
                <td key={column.key} className=" px-4 py-2">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
