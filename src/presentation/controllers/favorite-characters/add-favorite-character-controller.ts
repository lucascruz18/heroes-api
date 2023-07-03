import { Controller, Post, Param, Inject } from '@nestjs/common';
import { AddFavoriteCharacter } from '@/domain/usecases/favorite-characters/add-favorite-character.interface';
import { badRequest } from '@/presentation/helpers/http/HttpHelpers';

@Controller()
export class AddFavoriteCharactersController {
  constructor(
    @Inject('AddFavoriteCharacter')
    private readonly addFavoriteCharacter: AddFavoriteCharacter,
  ) {}

  @Post('characters/favorite/:characterId')
  async handle(@Param() param): Promise<any> {
    const { characterId } = param;
    const data = await this.addFavoriteCharacter.add(characterId);
    if (!data) {
      throw badRequest('Character not found.');
    }

    return data;
  }
}
