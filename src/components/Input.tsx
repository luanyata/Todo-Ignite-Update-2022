import styles from './Input.module.css'

type InputProps = {
  text: string
  onChange: (text: string) => void
}

export function Input({ text, onChange }: InputProps) {
  return (
    <input
      value={text}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      className={styles.search}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
