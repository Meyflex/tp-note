import { Request, Response } from 'express'
import { GetTasksUseCase } from '../../use-cases'
import { ValidationError, validate } from 'jsonschema'
import { ValidatorResult } from 'jsonschema'
import { PostTasksUseCase } from '../../use-cases'
import { PutTasksUseCase } from '../../use-cases'
import { DeleteTasksUseCase } from '../../use-cases'

const taskCreateSchema={
  id: "/Task",
  type: "object",
  properties:{
    title:{
      type:"string"
    },
    priorite:{
      type:"int"
    },
  },
  required:["title","priorite"]
}
export class TaskController {
  constructor(
    private readonly getTaksUseCase: GetTasksUseCase,
    private readonly PostTasksUseCase: PostTasksUseCase,
    private readonly PutTasksUseCase: PutTasksUseCase,
    private readonly DeleteTasksUseCase: DeleteTasksUseCase
  ) { }

  // Q2
  async getTasks(req: Request, res: Response) {
    
    const tasks = await this.getTaksUseCase.execute(req.query)
    res.status(200).json(tasks)
  }
  async createTask(req: Request, res: Response) {
    const validatorResult: ValidatorResult = validate(req.body, taskCreateSchema)
    if (validatorResult.valid) {
      try { 
        const task = await this.PostTasksUseCase.execute(req.body)
        res.status(201).json(task)

      } catch (error) {
        res.status(500).json(error)
      }
    } else {
      res.status(400).json(validatorResult.errors)
    }
}

async getTaskById(req: Request, res: Response) {
     try {
      const task = await this.getTaksUseCase.getItemById(req.params.id)
      res.status(201).json(task)
    } catch (error) {
      res.status(500).json(error)
    }
}


async updateTask(req: Request, res: Response) {
  const validatorResult: ValidatorResult = validate(req.body, taskCreateSchema)
  if (validatorResult.valid) {
    // try { 
      const task = await this.PutTasksUseCase.execute(req.params.id,req.body )
      res.status(201).json(task)
    //  } catch (error) {
    //   res.status(500).json(error)
    //  }
  } else {
    res.status(400).json(validatorResult.errors)
  }
}

async deleteTask(req: Request, res: Response) {
  try {
    const task = await this.DeleteTasksUseCase.execute(req.params.id)
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json(error)
  }

}
}