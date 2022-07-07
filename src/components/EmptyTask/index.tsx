import { ClipboardText } from 'phosphor-react'
import styles from './EmptyTask.module.css'

export function EmptyTasks() {
  return (
    <>
      <ClipboardText size={56} weight="thin" />
      <p className={styles.emptyMessage}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p> Crie tarefas e organize seus itens a fazer</p>
    </>
  )
}
