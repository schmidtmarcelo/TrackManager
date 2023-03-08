import { useEffect, useState } from 'react';
import DataTable from '@/components/DataTable/DataTable';
import Layout from '@/components/layout/Layout';

const ClientesAnuais: React.FC = () => {

  /*const data = [
    { id: 1, name: 'John', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Bob', age: 35, email: 'bob@example.com' },
  ];*/

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/clientes_anuais')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })

      .catch(error => console.error(error));


  }, []);

  const columns = [
    { key: 'id', title: 'id' },
    { key: 'chip_ccid', title: 'CHIP CCID' },
    { 
      key: 'clienteAssociation.nome_empresa', 
      title: 'Cliente',
      render: (value: any) => value?.clienteAssociation?.nome_empresa || '-'
    },
    { key: 'clienteAssociation.chip_m2m', title: 'chip_m2m' },
    { key: 'operadora', title: 'OPERADORA' },
    { key: 'valor', title: 'VALOR' },
    { key: 'data_da_compra', title: 'DATA DA COMPRA' },
    { key: 'status_do_pagamento', title: 'STATUS DO PAGAMENTO' },
    { key: 'proxima_cobranca', title: 'PRÓXIMA COBRANÇA' }
  ];

  return (
    <Layout>
      <DataTable data={data} columns={columns} />
    </Layout>
  );
};

export default ClientesAnuais;