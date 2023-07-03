import { Controller, Inject, Delete, Param } from '@nestjs/common';
import { DeleteFavoriteCharacter } from '@/domain/usecases/favorite-characters/delete-favorite-character.interface';
import { badRequest } from '@/presentation/helpers/http/HttpHelpers';

@Controller()
export class DeleteFavoriteCharactersController {
  constructor(
    @Inject('DeleteFavoriteCharacter')
    private readonly deleteFavoriteCharacter: DeleteFavoriteCharacter,
  ) {}

  @Delete('characters/unfavorite/:characterId')
  async handle(@Param() param): Promise<any> {
    const { characterId } = param;
    const data = await this.deleteFavoriteCharacter.delete(characterId);
    if (!data) {
      throw badRequest('Character not found.');
    }

    return {
      message: data,
    };
  }
}
