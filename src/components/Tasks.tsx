import { EmptyTasks } from './EmptyTasks'
import { Task } from './Task'
import styles from './Tasks.module.css'

type TaskProps = {
  id: string
  text: string
  done: boolean
}

type TasksProps = {
  tasks: TaskProps[]
  onDelete: (id: string) => void
}

export function Tasks({ tasks, onDelete }: TasksProps) {
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
          <div className={styles.count}>{doneTasks}</div>
        </div>
      </div>

      <div className={isEmpty ? styles.content : ''}>
        {isEmpty ? (
          <EmptyTasks />
        ) : (
          tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  )
}
