import { Tag } from '../../domains/types/tag'
import { ITagRepository } from '../../infrastructure'
export class GetTagsUseCase {
  constructor(private TagRepository: ITagRepository) {}

  async execute(): Promise<Tag[]> {
    return this.TagRepository.getAlltags()
   
  }
}
