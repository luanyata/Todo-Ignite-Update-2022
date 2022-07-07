/* eslint-disable no-unused-vars */
export enum TaskActionTypes {
  GET = 'tasks/getTasks',
  DELETE = 'tasks/deleteTask',
  CREATE = 'tasks/createTask',
  DONE = 'tasks/doneTask',
}

export enum TaskSagaTypes {
  GET = 'GET_TASKS',
  DELETE = 'DELETE_TASK',
  CREATE = 'CREATE_TASK',
  DONE = 'DONE_TASK',
}
