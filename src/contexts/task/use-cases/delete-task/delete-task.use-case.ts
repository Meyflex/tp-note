import { Task } from '../../domains'
import { ITaskRepository } from '../../infrastructure'

export class DeleteTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  //async execute(): Promise<Task[]> {
  async execute(id : string ): Promise<Task[]> {
     return await this.TaskRepository.deleteTask(id)
    
  }
 
}
