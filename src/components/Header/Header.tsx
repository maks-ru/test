import React, { useState } from 'react'
import { MyButton } from '../../UI/Button'
import { MyInput } from '../../UI/Input'
import { Link } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { dataTable } from '../../data/data'

export const Header = () => {
  const [data, setData] = useState(dataTable)
  const [value, setValue] = useState('')

  const searchData = data.filter(item => {
    return item.responsible.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className='flex bg-primary justify-content-between px-4 py-2'>
      <div className='flex gap-2'>
        <Link to='/'>
          <MyButton label='Таблица' severity='secondary' />
        </Link>
        <Link to='/card'>
          <MyButton label='Карточки' severity='secondary' />
        </Link>
      </div>
      <div className='flex gap-2'>
        {/*<MyInput />*/}
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        <MyButton label='Поиск' severity='secondary' />
      </div>
    </div>
  )
}

