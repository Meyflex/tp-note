import { Router } from 'express'
import { TaskController } from './controller'

export function taskRoutes(controller: TaskController): Router {
  const router = Router()
  // Q2
  router.get('/', controller.getTasks.bind(controller))
  
  router.get('/:id', controller.getTaskById.bind(controller))

  // Q1
  router.post('/', controller.createTask.bind(controller))
  // Q3
   router.patch('/:id', controller.updateTask.bind(controller))
  // Q4

  router.delete('/:id', controller.deleteTask.bind(controller))

  return router
}
