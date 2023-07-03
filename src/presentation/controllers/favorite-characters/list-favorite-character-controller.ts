import { Controller, Inject, Get } from '@nestjs/common';
import { ListFavoriteCharacters } from '@/domain/usecases/favorite-characters/list-favorite-characters.interface';
import { serverError } from '@/presentation/helpers/http/HttpHelpers';

@Controller()
export class ListFavoriteCharactersController {
  constructor(
    @Inject('ListFavoriteCharacters')
    private readonly listFavoriteCharacters: ListFavoriteCharacters,
  ) {}

  @Get('characters/favorite')
  handle(): any {
    try {
      const data = this.listFavoriteCharacters.findAll();

      return data;
    } catch (error) {
      throw serverError(error);
    }
  }
}
