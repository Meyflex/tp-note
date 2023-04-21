import { Router } from 'express'
import { TaskExternalDependencies, taskInjector } from '../contexts/task/infrastructure/task.injector'
import { TagInjector } from '../contexts/tag'
import { TagExternalDependencies } from '../contexts/tag/infrastructure/tag.injector'

export type ExternalDependencies = TaskExternalDependencies | TagExternalDependencies

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRoutes: GetRoutes = (externalDependencies: ExternalDependencies): Router[] => {
  // Main routes
  return [
    Router().use('/task', taskInjector(externalDependencies)),
    Router().use('/Tag', TagInjector(externalDependencies))

  ]
}

export type GetRoutes = (externalDependencies: ExternalDependencies) => Router[]
