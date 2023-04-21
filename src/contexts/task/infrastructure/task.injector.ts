import { Router } from 'express'
import { TaskRepository, RelationalDatabase } from '../../../infrastructure/database'
import { taskRoutes } from './task.routes'
import { TaskController } from './controller'
import { GetTasksUseCase } from '../use-cases'
import { PostTasksUseCase } from '../use-cases'
import { PutTasksUseCase } from '../use-cases'
import { DeleteTasksUseCase } from '../use-cases'

export type TaskExternalDependencies = {
  database: RelationalDatabase
}

export const taskInjector = (externalDependencies: TaskExternalDependencies): Router => {
  const taskRepository = new TaskRepository(externalDependencies.database)

  const getTasksUseCase = new GetTasksUseCase(taskRepository);
  const postTasksUseCase = new PostTasksUseCase(taskRepository);
  const putTasksUseCase = new PutTasksUseCase(taskRepository);
  const deleteTasksUseCase = new DeleteTasksUseCase(taskRepository);

  const taskController = new TaskController(
    getTasksUseCase,
    postTasksUseCase,
    putTasksUseCase,
    deleteTasksUseCase
  )

  return taskRoutes(taskController)
}
