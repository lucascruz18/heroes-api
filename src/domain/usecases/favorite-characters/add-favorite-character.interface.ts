import { FavoriteCharacters } from '@/domain/models/favorite-characters';

export interface AddFavoriteCharacter {
  add(characterId: number): Promise<FavoriteCharacters>;
}
