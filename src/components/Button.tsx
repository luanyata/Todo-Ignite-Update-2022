import { PlusCircle } from 'phosphor-react'
import styles from './Button.module.css'

type ButtonProps = {
  onSave: () => void
}

export function Button({ onSave }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onSave}>
      Criar <PlusCircle />
    </button>
  )
}
