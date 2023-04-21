import { Task } from '../../domains'
import { ITaskRepository } from '../../infrastructure'

export class PutTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }
  async execute(id : string,task : Task ): Promise<Task> {
     return await this.TaskRepository.updateTask(id,task)
  }
}
