import { ClipboardText } from 'phosphor-react'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.created}>
          <div className={styles.createTaskTitle}> Tarefas criadas</div>
          <div className={styles.count}>0</div>
        </div>
        <div className={styles.done}>
          <div className={styles.doneTaskTitle}> Concluidas</div>
          <div className={styles.count}>0</div>
        </div>
      </div>
      <div className={styles.content}>
        <ClipboardText size={56} weight="thin" />
        <p className={styles.emptyMessage}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p> Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
