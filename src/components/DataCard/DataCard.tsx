import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import React, { useEffect, useState } from 'react'
import { dataTable } from '../../data/data'
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator'

interface DataCardProps {
  className?: string;
}

export const DataCard = ({ className }: DataCardProps) => {
  const [customers, setCustomers] = useState(dataTable)
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(10)

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  useEffect(() => {
    console.log('first', first)
  }, [])

  return (
    <div className='card mx-4 mt-4'>
      <div className='card-container flex align-items-center justify-content-between flex-wrap gap-2'>
        {
          customers.slice(first, first + rows).map((el) => {
            return <Card className='w-25rem' key={el.id}>
              <div className='grid'>
                <div className='col'>
                  <div>
                    <p>Дата: </p>
                    <p>Важность: </p>
                    <p>Оборудование: </p>
                    <p>Сообщение: </p>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <p>{el.data}</p>
                    <p>{el.importance}</p>
                    <p>{el.equipment}</p>
                    <p>{el.message}</p>
                  </div>
                </div>
                <div className='col'>
                  <div>
                    <Avatar image='https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png' size='xlarge'
                            shape='circle' />
                  </div>
                  <p>{el.responsible}</p>
                </div>
              </div>
            </Card>
          })
        }

      </div>
      <Paginator first={first} rows={rows} totalRecords={customers.length} rowsPerPageOptions={[5, 10, 20]}
                 onPageChange={onPageChange} />
    </div>
  )
}
