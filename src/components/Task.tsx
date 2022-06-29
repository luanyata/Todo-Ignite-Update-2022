import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

type TaskProps = {
  id: string
  text: string
  done: boolean
}

type Props = {
  task: TaskProps
  onDelete: (id: string) => void
  onDone: (id: string) => void
}

export function Task({ task, onDelete, onDone }: Props) {
  return (
    <div className={styles.task}>
      <label className={styles.check}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onDone(task.id)}
        />
        <span className={styles.checkmark}></span>
      </label>

      <p className={task.done ? styles.done : styles.open}>{task.text}</p>
      <div className={styles.trash}>
        <Trash onClick={() => onDelete(task.id)} />
      </div>
    </div>
  )
}
