

// export function toBookRaw(book: Task): TaskRaw {

import { TaskRaw } from "../../../../contexts/task";
import { Task,Tag } from "@prisma/client";


// TODO: use real types
export function toTaskRaw(task: any): any {
  return {
    id: task.id,
    title: task.title,
    description: task.description || "", // handle null case
    priorite: task.priorite,
    tags: task.tags,

  }
}
