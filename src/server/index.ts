import { ActiveModelSerializer, createServer, Model } from 'miragejs'
import { TaskFactory, TaskMock } from './models/task.mock'
import { v4 } from 'uuid'

export const makeServer = ({ environment = 'test' } = {}) => {
  const server = createServer({
    serializers: { ActiveModelSerializer },
    environment,

    models: {
      task: Model.extend<Partial<TaskMock>>({}),
    },

    factories: {
      ...TaskFactory,
    },

    seeds(server) {
      server.createList('task', 10)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/tasks')
      this.post('/tasks', (schema: any, request) => {
        const task = JSON.parse(request.requestBody)

        return schema.create('task', { ...task, id: v4() })
      })
      this.put('/tasks/:id', (schema: any, request) => {
        const newTask = JSON.parse(request.requestBody)
        const task = schema.find('task', request.params.id)

        return task.update(newTask)
      })

      this.del('/tasks/:id')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
