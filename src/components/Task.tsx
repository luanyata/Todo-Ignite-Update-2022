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
}

export function Task({ task, onDelete }: Props) {
  return (
    <div className={styles.task}>
      <label className={styles.check}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <p>{task.text}</p>
      <div className={styles.trash}>
        <Trash onClick={() => onDelete(task.id)} />
      </div>
    </div>
  )
}
