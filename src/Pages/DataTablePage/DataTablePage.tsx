import { Table } from '../../components/DataTable'
import React from 'react'

interface DataTablePageProps {
    className?: string;
}

export const DataTablePage = ({className}: DataTablePageProps) => {
    return (
      <div className='surface-600 h-screen'>
        <Table/>
      </div>
    );
};
