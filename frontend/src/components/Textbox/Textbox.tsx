import styles from './styles.module.css'
import { HTMLProps, ReactNode } from 'react'
import clsx from 'clsx'

interface TextboxProps {
  size?: 'small' | 'medium',
  children?: ReactNode | ReactNode[],
}

type CombinedTextboxProps = TextboxProps & HTMLProps<HTMLButtonElement>

export default function Textbox({
  fill = false,
  variant = 'plain',
  size = 'medium',
  children,
  ...rest
}: CombinedTextboxProps) {
  return (
    <input
      type="text"
      className={clsx({
        [styles.button]: true,
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.plain]: variant === 'plain',
        [styles.outlined]: variant === 'outlined',
        [styles.accent]: variant === 'accent',
      })}
      {...rest}
    >
      {children}
    </input>
  )
}
