import { ITaskRepository } from '../../../../contexts/task'
import { RelationalDatabase } from '../../database'
import { TaskRaw } from '../../../../contexts/task'
import { toTaskRaw } from './task.mapper'

export class TaskRepository implements ITaskRepository {
  constructor(private readonly database: RelationalDatabase) { }

  async getTasks(req : object): Promise<TaskRaw[]> {
    type getTaskParams = { orderBy?: any; take?: number; skip?: number  }
    let param: getTaskParams = {}
    if ( req !== undefined && req !== null ) {
      if (Number(req.sorted)) param.orderBy = { priorite: 'asc' }
      if (Number(req.page) > 0) {
        param.take = 10
        param.skip = (Number(req.page) - 1) * 10
    }}
    
    const tasks = await this.database.client.task.findMany({...param, include: { tags: true }})
    return tasks.map(toTaskRaw)
}
async createTask(task: TaskRaw): Promise<TaskRaw> {
  const tags = task.tags || [];
  const tagIds = tags.map((tag) => tag.id);

  const createdTask = await this.database.client.task.create({
    data: {
      title: task.title,
      description: task.description,
      priorite: task.priorite,
      tags: {
        connect: tagIds.map((id) => ({ id })),
      },
    },
    include: {
      tags: true,
    },
  });

  return toTaskRaw(createdTask);
}



  async getTaskById(id: string): Promise<TaskRaw> {
    console.log(id)
    const task = await this.database.client.task.findUnique({ where: { id }})
    if (!task) {
      throw new Error('Task not found')
    }
    return toTaskRaw(task)
  }
  async updateTask(id: string, task: TaskRaw): Promise<TaskRaw> {
    const updatedTask = await this.database.client.task.update({
      where: { id },
      data: {
        ...task,
        tags: {
          connect: task.tags.map((tag) => ({ id: tag.id }))
        }
      },
      include: {
        tags: true
      }
    })
  
    if (!updatedTask) {
      throw new Error('Task not found')
    }
  
    return toTaskRaw(updatedTask)
  }
  
  

  async deleteTask(id: string): Promise<TaskRaw[]> {
    const deletedTask = await this.database.client.task.delete({
      where: { id }
    })
    if (!deletedTask) {
      throw new Error('Task not found')
    }
    return await this.getTasks({})
  }

}
