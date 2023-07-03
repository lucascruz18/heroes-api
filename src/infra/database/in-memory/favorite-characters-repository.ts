import { Injectable } from '@nestjs/common';
import { FavoritesCharactersRepositoryInterface } from '@/application/protocols/db/favortes-characters-repository-interface';
import { FavoriteCharacters } from '@/domain/models/favorite-characters';

@Injectable()
export class FavoritesCharactersRepository
  implements FavoritesCharactersRepositoryInterface
{
  private favoriteCharacters: FavoriteCharacters[] = [];

  async add(
    favoriteCharacterData: FavoriteCharacters,
  ): Promise<FavoriteCharacters> {
    this.favoriteCharacters.push(favoriteCharacterData);

    return favoriteCharacterData;
  }

  async findAll(): Promise<FavoriteCharacters[]> {
    return this.favoriteCharacters;
  }

  async findById(id: number): Promise<FavoriteCharacters> {
    const characterIndex = this.favoriteCharacters.findIndex(
      (character) => character.id == id,
    );

    return this.favoriteCharacters[characterIndex];
  }

  async delete(characterId: number): Promise<void> {
    const findIndex = this.favoriteCharacters.findIndex(
      (character) => character.id == characterId,
    );

    this.favoriteCharacters.splice(findIndex, 1);
  }
}
