import { Task } from '../../domains'
import { ITaskRepository } from '../../infrastructure'

export class GetTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  //async execute(): Promise<Task[]> {
  async execute(req : object ): Promise<Task[]> {
     return await this.TaskRepository.getTasks(req)
    
  }
  async getItemById(id: string): Promise<Task> {
    return await this.TaskRepository.getTaskById(id)
  }
}
