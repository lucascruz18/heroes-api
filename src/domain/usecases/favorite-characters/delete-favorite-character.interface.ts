export interface DeleteFavoriteCharacter {
  delete(characterId: number): Promise<string>;
}
