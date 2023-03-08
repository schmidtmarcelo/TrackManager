import React from "react";
import Layout from "@/components/layout/Layout";

const users = () => {

  const data = [
    { id: 1, name: "Jon doe", email: "jhondoe@example.com", created_at: "2021-1-12" },
    { id: 2, name: "Jon doe 2", email: "jhondoe2@example.com", created_at: "2021-1-12" },
    { id: 3, name: "Jon doe 3", email: "jhondoe3@example.com", created_at: "2021-1-12" }
  ];

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="p-8 border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300" id="dataTable">
                <thead className="bg-black">
                  <tr>
                    <th className="px-6 py-2 text-xs text-white">ID</th>
                    <th className="px-6 py-2 text-xs text-white">Name</th>
                    <th className="px-6 py-2 text-xs text-white">Email</th>
                    <th className="px-6 py-2 text-xs text-white">Created_at</th>
                    <th className="px-6 py-2 text-xs text-white">Edit</th>
                    <th className="px-6 py-2 text-xs text-white">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                {data.map((item) => (
                  <tr className="text-center whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      1
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Jon doe
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">jhondoe@example.com</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      2021-1-12
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="inline-block text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="inline-block text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>);
};

export default users;
