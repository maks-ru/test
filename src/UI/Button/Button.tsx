import { ButtonHTMLAttributes, FC } from 'react'
import { Button } from 'primereact/button'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string
  severity?: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | undefined
}

export const MyButton: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    label,
    severity,
  } = props

  return (
    <Button label={label} severity={severity} className={className}>{children}</Button>
  )
}


