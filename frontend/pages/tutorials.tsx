import Layout from '@/components/layout/Layout';
import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const tutorials = () => {

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
    { key: 'numero', title: 'CHIP M2M' },
    { key: 'operadora', title: 'OPERADORA' },
    { key: 'valor', title: 'VALOR' },
    { key: 'data_da_compra', title: 'DATA DA COMPRA' },
    { key: 'proxima_cobranca', title: 'PRÓXIMA COBRANÇA' }
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


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

    console.log(key)
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  const handlePageClick = (selected: any) => {
    setCurrentPage(selected.selected);
  };

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
      <div className="table-container py-40">
        <div>
          <input
            type="text"
            className="border rounded px-2 py-1 text-black"
            placeholder="Pesquisar"
            value={searchText}
            onChange={handleSearchInputChange}
          />
        </div>
        <table className="table-auto p-3">
          <thead>
            <tr className="table-header">
              {columns.map((column) => (
                <th key={column.key} className=" px-4 py-2 text-left font-bold table-header-cell">
                  <div className='whitespace-nowrap'>
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
          <tbody>
            {currentData.map((row: Row) => (
              <tr key={row.id} className="table-row whitespace-nowrap ">
                {columns.map((column) => (
                  <td key={column.key} className="table-cell">
                    {column.key==="data_da_compra" || column.key==="proxima_cobranca" ? 
                    new Date(row[column.key]).toLocaleDateString('pt-BR') :
                    row[column.key]}
                  </td>
                ))}
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
          pageLinkClassName="pagination-link"
          previousLinkClassName="pagination-link"
          nextLinkClassName="pagination-link"
          disabledClassName="pagination-link-disabled"
          activeClassName="pagination-link-active"
        />
      </div>
    </Layout>

  )
}

export default tutorials