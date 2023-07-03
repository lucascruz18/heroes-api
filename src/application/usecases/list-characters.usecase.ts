import { Injectable } from '@nestjs/common';
import { Characters, ListCharactersFilters } from '@/domain/models/characters';
import { ListCharacters } from '@/domain/usecases/characters/list-characters.interface';
import { CharactersRepositoryInterface } from '@/application/protocols/db/character-repository-interface';

@Injectable()
export class ListCharactersUseCase implements ListCharacters {
  constructor(private charactersRepository: CharactersRepositoryInterface) {}

  async findAll(filters?: ListCharactersFilters): Promise<Characters[]> {
    const characters = await this.charactersRepository.findAll(filters);

    return characters;
  }
}
