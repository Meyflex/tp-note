import { Tag } from "./tag"
export type Task = {
    id: string
    title: string
    description: string
    priorite: number
    tags: Tag[]
  }
export type TaskCreate = Omit<Task, 'id'>
export type TaskUpdate = Omit<Task, 'author'>