import { createSlice } from '@reduxjs/toolkit'

type Task = {
  id: string
  text: string
  done: boolean
}
type TaskState = {
  tasks: Task[]
}

const task = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  } as TaskState,
  reducers: {
    getTasks: (_, action) => {
      return { tasks: action.payload }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    createTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    doneTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task = action.payload
        }
        return task
      })
    },
  },
})

export const { getTasks, deleteTask, doneTask, createTask } = task.actions
export default task.reducer
