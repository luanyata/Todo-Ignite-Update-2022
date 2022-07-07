import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

import { useDispatch } from 'react-redux'
import { TaskSagaTypes } from '../../store/tasks/task.types'

type TaskProps = {
  task: {
    id: string
    text: string
    done: boolean
  }
}

export function Task({ task }: TaskProps) {
  const dispatch = useDispatch()

  return (
    <div className={styles.task}>
      <label className={styles.check}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch({ type: TaskSagaTypes.DONE, payload: task })}
        />
        <span className={styles.checkmark}></span>
      </label>

      <p className={task.done ? styles.done : styles.open}>{task.text}</p>
      <div className={styles.trash}>
        <Trash
          onClick={() =>
            dispatch({ type: TaskSagaTypes.DELETE, payload: task.id })
          }
        />
      </div>
    </div>
  )
}
