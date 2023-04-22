

// export function toBookRaw(book: Task): TaskRaw {

import { TaskRaw } from "../../../../contexts/task";
import { Task } from "../../../../contexts/task/domains";

// TODO: use real types
export function toTaskRaw(task: Task): TaskRaw {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    priorite: task.priorite,
    tags: task.tags,
  }
}
