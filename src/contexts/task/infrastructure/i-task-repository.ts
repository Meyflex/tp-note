import { Task, TaskCreate,TaskUpdate } from "../domains/types";
export type TaskRaw = Task
export type TaskCreateRaw = TaskCreate
export type TaskUpdateRaw = TaskUpdate


export interface ITaskRepository {
  getTasks(req : object): Promise<Task[]>;
  createTask(task : Task ): Promise<Task>;
  getTaskById(id: string): Promise<Task>;
  updateTask(id: string, task: TaskUpdate): Promise<Task>;
  deleteTask(id: string): Promise<Task[]>;
}

 