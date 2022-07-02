import { ChangeEvent, useEffect, useState } from 'react'

import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { Input } from './components/Input'
import { Button } from './components/Button'

import { makeServer } from './server'
import { useDispatch } from 'react-redux'
import { TaskSagaTypes } from './store/task.types'

import styles from './App.module.css'
import './global.css'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

function App() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: TaskSagaTypes.GET })
  }, [dispatch])

  const handleChange = (value: string) => {
    setText(value)
  }

  const handleSave = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTask = {
      text,
      done: false,
    }
    dispatch({ type: TaskSagaTypes.CREATE, payload: newTask })
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
