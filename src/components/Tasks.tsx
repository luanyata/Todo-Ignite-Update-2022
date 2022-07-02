import { EmptyTasks } from './EmptyTasks'
import { Task } from './Task'
import styles from './Tasks.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export function Tasks() {
  const { tasks } = useSelector((state: RootState) => state.tasks)

  const totalTasks = tasks.length
  const doneTasks = tasks.filter((task) => task.done).length
  const isEmpty = totalTasks === 0

  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.created}>
          <div className={styles.createTaskTitle}> Tarefas criadas</div>
          <div className={styles.count}>{totalTasks}</div>
        </div>
        <div className={styles.done}>
          <div className={styles.doneTaskTitle}> Concluidas</div>
          <div className={styles.count}>
            {doneTasks} de {totalTasks}
          </div>
        </div>
      </div>

      <div className={isEmpty ? styles.content : ''}>
        {isEmpty ? (
          <EmptyTasks />
        ) : (
          tasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  )
}
