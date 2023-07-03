import { Injectable } from '@nestjs/common';
import { FavoriteCharacters } from '@/domain/models/favorite-characters';
import { AddFavoriteCharacter } from '@/domain/usecases/favorite-characters/add-favorite-character.interface';
import { CharactersRepositoryInterface } from '@/application/protocols/db/character-repository-interface';
import { FavoritesCharactersRepositoryInterface } from '@/application/protocols/db/favortes-characters-repository-interface';

@Injectable()
export class AddFavoriteCharacterUseCase implements AddFavoriteCharacter {
  constructor(
    private readonly charactersRepository: CharactersRepositoryInterface,
    private readonly favoritesCharactersRepositoryInterface: FavoritesCharactersRepositoryInterface,
  ) {}

  async add(characterId: number): Promise<FavoriteCharacters> {
    const character = await this.charactersRepository.findById(characterId);
    if (!character) {
      return null;
    }
    const favoriteCharacter =
      await this.favoritesCharactersRepositoryInterface.add({
        id: character.id,
        name: character.name,
        description: character.description,
      });

    return favoriteCharacter;
  }
}
