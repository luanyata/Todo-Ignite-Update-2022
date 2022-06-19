import styles from './Input.module.css'

export function Input() {
  return (
    <input
      type="text"
      className={styles.search}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
