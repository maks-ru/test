import React, { useState, useEffect, FC } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { dataTable } from '../../data/data'
import { Avatar } from 'primereact/avatar'

interface DataTableProps {
  className?: string;
}

export const Table: FC<DataTableProps> = ({ className }: DataTableProps) => {
  const [customers, setCustomers] = useState(dataTable)

  useEffect(() => {
    console.log('customers', customers)
  }, [])

  return (
    <div className='card'>
      <DataTable
        value={customers}
        paginator rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}>
        <Column field='data' header='Дата' style={{ width: '25%' }}></Column>
        <Column field='importance' header='Важность' style={{ width: '25%' }}></Column>
        <Column field='equipment' header='Оборудование' style={{ width: '25%' }}></Column>
        <Column field='message' header='Сообщения' sortable style={{ width: '25%' }}></Column>
        <Column field='responsible' header='Ответственный' sortable style={{ width: '25%' }}>
        </Column>
      </DataTable>
    </div>
  )
}
