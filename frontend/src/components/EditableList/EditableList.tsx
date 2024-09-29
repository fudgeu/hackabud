import styles from './styles.module.css'
import Textbox from '../Textbox/Textbox.tsx'
import Button from '../Button/Button.tsx'
import { Close } from '@mui/icons-material'

interface EditableListProps {
  variant?: string,
  values: string[],
  updateValues: (newValues: string[]) => void,
  placeholder?: string,
}

export default function EditableList({ variant = 'transparent', values, updateValues, placeholder }: EditableListProps) {
  return (
    <div className={styles.list}>
      {
        values.map((value, i) => (
          <div className={styles.listItem}>
            <Textbox
              variant={variant}
              value={value}
              onChange={(e) => {
                const newList = [...values.slice(0, i), e.target.value, ...values.slice(i + 1)]
                updateValues(newList)
              }}
              placeholder={placeholder ?? ''}
              fill
              required
            />
            <Button
              startDecorator={<Close />}
              square
              onClick={() => {
                const newList = [...values.slice(0, i), ...values.slice(i + 1)]
                updateValues(newList)
              }}
            />
          </div>
        ))
      }
      {values.length === 0 && 'No entries found!'}
    </div>
  )
}
