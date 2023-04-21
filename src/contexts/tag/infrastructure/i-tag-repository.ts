import { Tag } from "../domains/types/tag"
export type TagRaw = Tag


export interface ITagRepository {
  getAlltags(): Promise<Tag[]>
  addTag(Tag: TagRaw): Promise<Tag>
}
