import { useEffect, useState } from 'react';
import DataTable from '@/components/DataTable/DataTable';
import Layout from '@/components/layout/Layout';

const ClientesAnuais: React.FC = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/clientes_anuais')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })

      .catch(error => console.error(error));


  }, []);

  const columns = [
    { key: 'id', title: 'id' },
    { key: 'chip_ccid', title: 'CHIP CCID' },
    { key: 'nome_empresa', title: 'Cliente' },
    { key: 'chip_m2m', title: 'chip_m2m' },
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