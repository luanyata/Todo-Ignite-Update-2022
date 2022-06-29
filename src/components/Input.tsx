import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

type InputProps = {
  onCreate: (text: string) => void
  text: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ onCreate, text }: InputProps) {
  return (
    <input
      value={text}
      onChange={(e) => onCreate(e.target.value)}
      type="text"
      className={styles.search}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
