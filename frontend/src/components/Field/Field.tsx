import styles from './styles.module.css'
import {HTMLProps, useId} from 'react'
import Textbox from '../Textbox/Textbox.tsx'

interface FieldProps {
  type?: string,
  label: string,
  value: string,
  placeholder?: string,
  required?: boolean,
  onChange: (newVal: string) => void,
}

export default function Field({ type, label, value, placeholder, required = false, onChange }: FieldProps) {
  const id = useId()

  return (
    <div className={styles.formField}>
      <label htmlFor={id}>{label}</label>
      <Textbox
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
