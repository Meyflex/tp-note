
import { Tag } from "../../../../contexts/task/domains/types/tag";
import { TagRaw } from "../../../../contexts/tag";

// TODO: use real types
export function toTagRaw(tag: any): any {
  return {
    id: tag.id,
    title: tag.title,
    tasks: tag.tasks,
  }
}
