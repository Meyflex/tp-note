import { ITagRepository } from '../../../../contexts/tag'
import { RelationalDatabase } from '../../database'
import { TagRaw } from '../../../../contexts/tag'
import { toTagRaw } from './tag.mapper'

export class TagRepository implements ITagRepository {
  constructor(private readonly database: RelationalDatabase) { }

    async getAlltags(): Promise<TagRaw[]> {
    const tag = await this.database.client.tag.findMany()
    return tag.map(toTagRaw)
    }

    async addTag(tag: TagRaw): Promise<TagRaw> {
    const tagRaw = await this.database.client.tag.create({
      data: tag
    })
    return toTagRaw(tagRaw) 

    }
  

}
