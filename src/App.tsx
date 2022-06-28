import { Header } from './components/Header'
import { Search } from './components/Search'
import { v4 as uuid } from 'uuid'
import styles from './App.module.css'

import './global.css'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      done: false,
    },
    { id: uuid(), text: 'Task 2', done: false },
    { id: uuid(), text: 'Task 3', done: false },
    { id: uuid(), text: 'Task 4', done: true },
  ])

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Search />
        <div className={styles.tasks}>
          <Tasks tasks={tasks} onDelete={handleDeleteTask} />
        </div>
      </div>
    </div>
  )
}

export default App
