import { Request, Response } from 'express'
import { GetTagsUseCase  } from '../../use-cases'
import { AddTagUseCase } from '../../use-cases'
export class TagController {
  constructor(
    private readonly getTagUseCase: GetTagsUseCase,
    private readonly addTagUseCase: AddTagUseCase
  ) {}

  async getAuthors(req: Request, res: Response) {
    const authors = await this.getTagUseCase.execute()
    res.status(200).json(authors)
  }

  async addAuthor(req: Request, res: Response) {
    try {
      const Author = await this.addTagUseCase.execute(req.body)
      res.status(201).json(Author)
    } catch (error: any) {
      console.log(error)
      // renvoyer la stacktrace à l'utilisateur n'est pas une bonne pratique
      res.status(500).json([
        {
          code: 'INTERNAL_SERVER_ERROR'
        }
      ])
    }
  }
}
