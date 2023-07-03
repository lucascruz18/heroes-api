import { Injectable } from '@nestjs/common';
import { DeleteFavoriteCharacter } from '@/domain/usecases/favorite-characters/delete-favorite-character.interface';
import { FavoritesCharactersRepositoryInterface } from '@/application/protocols/db/favortes-characters-repository-interface';

@Injectable()
export class DeleteFavoriteCharacterUseCase implements DeleteFavoriteCharacter {
  constructor(
    private readonly favoritesCharactersRepositoryInterface: FavoritesCharactersRepositoryInterface,
  ) {}

  async delete(characterId: number): Promise<string> {
    const character =
      await this.favoritesCharactersRepositoryInterface.findById(characterId);
    if (!character) {
      return null;
    }
    await this.favoritesCharactersRepositoryInterface.delete(characterId);

    return 'Favorite character deleted.';
  }
}
