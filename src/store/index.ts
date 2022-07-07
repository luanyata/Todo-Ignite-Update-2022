import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import taskSaga from './tasks/task.sagas'

import TaskReducer from './tasks/task.store'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    tasks: TaskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(taskSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
