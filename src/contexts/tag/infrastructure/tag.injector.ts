import { Router } from 'express'
import {  RelationalDatabase } from '../../../infrastructure/database'
import { TagRepository } from '../../../infrastructure/database/repositories/tag/tag.repository'
import { GetTagsUseCase } from '../use-cases'
import { AddTagUseCase } from '../use-cases'
import { tagRoutes } from './tag.routes'
import { TagController } from './controller'

export type TagExternalDependencies = {
  database: RelationalDatabase
}

export const TagInjector = (externalDependencies: TagExternalDependencies): Router => {
  const tagRepository = new TagRepository(externalDependencies.database)

  const getTagUseCase = new GetTagsUseCase(tagRepository)
  const addtagUseCase = new AddTagUseCase(tagRepository)

  const tagController = new TagController(getTagUseCase, addtagUseCase)

  return tagRoutes(tagController)
}
