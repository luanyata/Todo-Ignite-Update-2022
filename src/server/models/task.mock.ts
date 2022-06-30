import { Factory } from 'miragejs'
import { Chance } from 'chance'

export type TaskMock = {
  id: string
  text: string
  done: boolean
}

export const TaskFactory = {
  task: Factory.extend<TaskMock>({
    id: () => Chance().guid(),
    text: () => Chance().sentence(),
    done: () => Chance().bool(),
  }),
}
