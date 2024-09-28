import styles from './styles.module.css'
import { HTMLProps, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonsProps {
  fill?: boolean,
  variant?: 'plain' | 'outlined' | 'accent',
  size?: 'small' | 'medium',
  startDecorator: ReactNode | undefined,
  square?: boolean,
  children?: ReactNode | ReactNode[],
}

type CombinedButtonProps = ButtonsProps & HTMLProps<HTMLButtonElement>

export default function Button({
  fill = false,
  variant = 'plain',
  size = 'medium',
  startDecorator,
  children,
  ...rest
}: CombinedButtonProps) {
  return (
    <button
      type="button"
      className={clsx({
        [styles.button]: true,
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.plain]: variant === 'plain',
        [styles.outlined]: variant === 'outlined',
        [styles.accent]: variant === 'accent',
        [styles.fill]: fill,
      })}
      {...rest}
    >
      {startDecorator}
      {children}
    </button>
  )
}
