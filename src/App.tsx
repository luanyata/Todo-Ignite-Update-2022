import { useState } from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Tasks } from './components/Tasks'
import { v4 as uuid } from 'uuid'

import styles from './App.module.css'
import './global.css'

function App() {
  const [text, setText] = useState('')
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

  const handleCreateTask = (text: string) => {
    setText(text)
  }

  const handleSaveTask = () => {
    const newTask = { id: uuid(), text, done: false }
    const newTasks = [...tasks, newTask].sort(
      (a, b) => Number(a.done) - Number(b.done),
    )
    setTasks(newTasks)
    setText('')
  }

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleDoneTask = (id: string) => {
    const newTasks = tasks
      .map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        }
        return task
      })
      .sort((a, b) => Number(a.done) - Number(b.done))

    setTasks(newTasks)
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Search
          onCreate={handleCreateTask}
          onSave={handleSaveTask}
          text={text}
        />
        <div className={styles.tasks}>
          <Tasks
            tasks={tasks}
            onDelete={handleDeleteTask}
            onDone={handleDoneTask}
          />
        </div>
      </div>
    </div>
  )
}

export default App
