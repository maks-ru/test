import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext'


export type InputProps = {
  className?: string
  initValue?: string
  placeholder?: string
  onChange?: (newValue: string) => void
}

export const MyInput: FC<InputProps> = (props) => {
  const {
    onChange,
    initValue = '',
  } = props
  const [value, setValue] = useState(initValue)
  useEffect(() => {
    setValue(initValue)
  }, [initValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange?.(newValue)
    setValue(newValue)
  }


  return (
    <InputText
      value={value}
      onChange={handleChange} />
  )
}
