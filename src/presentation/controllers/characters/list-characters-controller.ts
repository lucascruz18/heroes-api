import { Controller, Inject, Get, Query } from '@nestjs/common';
import { ListCharacters } from '@/domain/usecases/characters/list-characters.interface';
import { serverError } from '@/presentation/helpers/http/HttpHelpers';

@Controller()
export class ListCharactersController {
  constructor(
    @Inject('ListCharacters')
    private readonly listCharacters: ListCharacters,
  ) {}

  @Get('characters')
  async handle(@Query() query): Promise<any> {
    try {
      const { offset = 0, limit = 10, characterName } = query;
      const data = this.listCharacters.findAll({
        characterName,
        offset,
        limit,
      });

      return data;
    } catch (error) {
      throw serverError(error);
    }
  }
}
