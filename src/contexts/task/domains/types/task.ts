export type Task = {
    id: string
    title: string
    description: string
    priorite: string
  }
  
export type TaskCreate = Omit<Task, 'id'>
export type TaskUpdate = Omit<Task, 'author'>