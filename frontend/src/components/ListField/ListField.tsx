import styles from './styles.module.css'
import LabelWithButton from '../LabelWithButton/LabelWithButton.tsx'
import { Add } from '@mui/icons-material'
import EditableList from '../EditableList/EditableList.tsx'

interface ListFieldProps {
  variant?: 'white' | 'transparent',
  label: string,
  placeholder?: string,
  values: string[],
  setValues: (newValues: string[]) => void,
}

export default function ListField({ variant = 'transparent', label, placeholder, values, setValues }: ListFieldProps) {
  return (
    <div className={styles.formField}>
      <LabelWithButton
        buttonLabel="Add new"
        buttonIcon={<Add />}
        onClick={() => setValues([...values, ''])}
      >
        {label}
      </LabelWithButton>
      <EditableList variant={variant} values={values} updateValues={setValues} placeholder={placeholder} />
    </div>
  )
}
