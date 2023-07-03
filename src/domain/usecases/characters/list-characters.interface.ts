import { Characters, ListCharactersFilters } from '@/domain/models/characters';

export interface ListCharacters {
  findAll(filters?: ListCharactersFilters): Promise<Characters[]>;
}
