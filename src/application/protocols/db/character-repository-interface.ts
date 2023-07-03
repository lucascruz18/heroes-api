import { Characters, ListCharactersFilters } from '@/domain/models/characters';

export interface CharactersRepositoryInterface {
  findAll(filters?: ListCharactersFilters): Promise<Characters[]>;
  findById(id: number): Promise<Characters>;
}
