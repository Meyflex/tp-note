import { Task } from './task'
export type Tag = {
    id: string
    title: string
    tasks: Task[]
  }

export type TaskCreate = Omit<Task, 'id'>
export type TaskUpdate = Omit<Task, 'author'>
