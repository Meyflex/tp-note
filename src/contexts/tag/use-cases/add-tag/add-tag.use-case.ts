import { Tag } from '../../domains/types/tag'
import { TagRaw } from '../../infrastructure/i-tag-repository'
import { ITagRepository } from '../../infrastructure/i-tag-repository'
import { TagRepository } from '../../../../infrastructure/database/repositories/tag'

export class AddTagUseCase {
  constructor(private TagRepository: ITagRepository) {}

  async execute(tag: TagRaw): Promise<Tag> {
     return this.TagRepository.addTag(tag)
   
  }
}
