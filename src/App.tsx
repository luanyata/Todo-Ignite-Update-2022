import { ChangeEvent, useState } from 'react'

import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import { Input } from './components/Input'
import { Button } from './components/Button'

import { makeServer } from './server'
import { useDispatch } from 'react-redux'
import { createTask } from './store/task.store'

import { v4 } from 'uuid'

import styles from './App.module.css'
import './global.css'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

function App() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleChange = (value: string) => {
    setText(value)
  }

  const handleSave = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTask = {
      id: v4(),
      text,
      done: false,
    }
    dispatch(createTask(newTask))
    setText('')
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleSave} className={styles.addTask}>
          <Input text={text} onChange={handleChange} />
          <Button />
        </form>
        <div className={styles.tasks}>
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default App
