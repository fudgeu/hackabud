import styles from './styles.module.css'
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface TextboxProps {
  type?: string,
  fill?: boolean,
  size?: 'small' | 'medium',
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  children?: ReactNode | ReactNode[],
}

type CombinedTextboxProps = TextboxProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function Textbox({
  type = 'text',
  fill = false,
  size = 'medium',
  onChange = () => {},
  children,
  ...rest
}: CombinedTextboxProps) {
  return (
    <input
      type={type}
      className={clsx({
        [styles.textbox]: true,
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.fill]: fill,
      })}
      onChange={(e) => onChange(e)}
      {...rest}
    >
      {children}
    </input>
  )
}
