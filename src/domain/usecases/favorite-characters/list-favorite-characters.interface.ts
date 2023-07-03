import { FavoriteCharacters } from '@/domain/models/favorite-characters';

export interface ListFavoriteCharacters {
  findAll(): Promise<FavoriteCharacters[]>;
}
