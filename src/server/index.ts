import { ActiveModelSerializer, createServer, Model } from 'miragejs'
import { TaskFactory, TaskMock } from './models/task.mock'

export const makeServer = ({ environment = 'development' } = {}) => {
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

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
