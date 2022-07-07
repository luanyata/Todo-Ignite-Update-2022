// @ts-nocheck
import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../service'
import { TaskActionTypes, TaskSagaTypes } from './task.types'

type Task = {
  id?: string
  text: string
  done: boolean
}

const getTask = async () => await api.get<Task[]>('/tasks')
const createTask = async (task: Task) => await api.post('/tasks', task)
const updateTask = async (task: Task) =>
  await api.put(`/tasks/${task.id}`, task)
const deleteTask = async (id: string) => await api.delete(`/tasks/${id}`)

export function* getTasksSaga() {
  try {
    const { data }: any = yield call(getTask)

    yield put({ type: TaskActionTypes.GET, payload: data.tasks })
  } catch (error) {
    throw new Error(error)
  }
}

export function* createTaskSaga(action: any) {
  try {
    const { data }: any = yield call(createTask, action.payload)

    yield put({ type: TaskActionTypes.CREATE, payload: data.task })
  } catch (error) {
    throw new Error(error)
  }
}

export function* doneTaskSaga(action: any) {
  try {
    const { data }: any = yield call(updateTask, {
      ...action.payload,
      done: !action.payload.done,
    })

    yield put({ type: TaskActionTypes.DONE, payload: data.task })
  } catch (error) {
    throw new Error(error)
  }
}

export function* deleteTaskSaga(action: any) {
  try {
    yield call(deleteTask, action.payload)

    yield put({ type: TaskActionTypes.DELETE, payload: action.payload })
  } catch (error) {
    throw new Error(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(TaskSagaTypes.GET, getTasksSaga)
  yield takeEvery(TaskSagaTypes.CREATE, createTaskSaga)
  yield takeEvery(TaskSagaTypes.DONE, doneTaskSaga)
  yield takeEvery(TaskSagaTypes.DELETE, deleteTaskSaga)
}
