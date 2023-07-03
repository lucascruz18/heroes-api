import { Injectable } from '@nestjs/common';
import { FavoriteCharacters } from '@/domain/models/favorite-characters';
import { ListCharacters } from '@/domain/usecases/characters/list-characters.interface';
import { FavoritesCharactersRepositoryInterface } from '@/application/protocols/db/favortes-characters-repository-interface';

@Injectable()
export class ListFavoriteCharactersUseCase implements ListCharacters {
  constructor(
    private favoritesCharactersRepositoryInterface: FavoritesCharactersRepositoryInterface,
  ) {}

  async findAll(): Promise<FavoriteCharacters[]> {
    const favoriteCharacters =
      await this.favoritesCharactersRepositoryInterface.findAll();

    return favoriteCharacters;
  }
}
