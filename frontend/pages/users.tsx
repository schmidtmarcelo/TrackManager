
import React, { MouseEventHandler, useCallback, useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import ReactPaginate from 'react-paginate';

const users = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  type Data = typeof data;
  type SortKeys = keyof Data[0];
  type SortOrder = "ascn" | "desc";

  type Row = {
    id: number;
    [key: string]: any;
  };

  const [sortKey, setSortKey] = useState<SortKeys>("proxima_cobranca");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  useEffect(() => {
    fetch('http://localhost:3001/clientes_anuais')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error(error));
  }, []);

  const columns = [
    { key: 'ccid', title: 'CHIP CCID' },
    { key: 'nome_empresa', title: 'CLIENTE' },
    { key: 'numero', title: 'CHIP NÚMERO' },
    { key: 'operadora', title: 'OPERADORA' },
    { key: 'valor', title: 'VALOR' },
    { key: 'data_da_compra', title: 'DATA DA COMPRA' },
    { key: 'proxima_cobranca', title: 'PRÓXIMA COBRANÇA' }
  ];

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageClick = (selected: any) => {
    setCurrentPage(selected.selected);
  };

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function sortData({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) {
    if (!sortKey) return tableData;
    const sortedData = data.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });
    if (reverse) return sortedData.reverse();
    return sortedData;
  }

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  const filteredData = sortedData().filter((row) => {
    return Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  const currentData = filteredData.slice(startIndex, endIndex);

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    setSortKey(key);
  }

  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
    return (
      <button
        onClick={onClick}
        className={`${sortKey === columnKey && sortOrder === "desc"
          ? "sort-button sort-reverse "
          : "sort-button"
          }`}
      >
        ▲
      </button>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto ">
        <div className="flex flex-col ">
          <div className="w-full ">
            <div className="py-40 border-b shadow table-container">
              <div className="">
                <input
                  type="text"
                  className="border rounded px-2 py-1 text-black"
                  placeholder="Pesquisar"
                  value={searchText}
                  onChange={handleSearchInputChange}
                />
              </div>
              <table className="divide-y table" >
                <thead>
                  <tr className="table-header">
                    {columns.map((column) => (
                      <th key={column.key} className="px-6 py-2">
                        <div className='whitespace-nowrap text-left'>
                          <span>{column.title}</span>
                          <SortButton
                            columnKey={column.key}
                            onClick={() => changeSort(column.key)}
                            {...{
                              sortOrder,
                              sortKey,
                            }}
                          />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {currentData.map((row: Row) => (
                    <tr key={row.id} className="whitespace-nowrap ">
                      {columns.map((column) => (
                        <td key={column.key} className="px-6 py-4 text-sm">
                          {column.key === "data_da_compra" || column.key === "proxima_cobranca" ?
                            new Date(row[column.key]).toLocaleDateString('pt-BR') :
                            row[column.key]}
                        </td>
                      ))}
                      {/* <td >
                        <a href="#" className="inline-block text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=""
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 
                              112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </a>
                      </td>
                      <td >
                        <a href="#" className="inline-block text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 
                              7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </a>
                      </td>*/}
                    </tr>

                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel="Anterior"
                nextLabel="Próximo"
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                onPageChange={handlePageClick}
                containerClassName="pagination-container"
                pageLinkClassName="pagination-link-2"
                previousLinkClassName="pagination-link-2"
                nextLinkClassName="pagination-link-2"
                disabledClassName="pagination-link-disabled"
                activeClassName="pagination-link-active"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>);
};

export default users;
