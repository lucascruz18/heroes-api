import { FavoriteCharacters } from '@/domain/models/favorite-characters';

export interface FavoritesCharactersRepositoryInterface {
  findAll(): Promise<FavoriteCharacters[]>;
  findById(id: number): Promise<FavoriteCharacters>;
  add(favoriteCharacterData: FavoriteCharacters): Promise<FavoriteCharacters>;
  delete(characterId: number): Promise<void>;
}
