import { Router } from 'express'
import { TagController } from './controller'
export function tagRoutes(controller: TagController): Router {
  const router = Router()
  router.get('/', controller.getAuthors.bind(controller))
  router.post('/', controller.addAuthor.bind(controller))
  return router
}
