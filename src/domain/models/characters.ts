export interface ListCharactersFilters {
  characterName?: string;
  offset?: number;
  limit?: number;
}

export interface Characters {
  id: number;
  name: string;
  description: string;
}
