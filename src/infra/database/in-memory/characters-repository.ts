import { Injectable } from '@nestjs/common';
import { ListCharactersFilters, Characters } from '@/domain/models/characters';
import { CharactersRepositoryInterface } from '@/application/protocols/db/character-repository-interface';
import { ExternalApiUseCaseInterface } from '@/application/protocols/exteral-api/external-api-usecase-interface';

@Injectable()
export class CharactersRepository implements CharactersRepositoryInterface {
  private characters: Characters[] = [];

  constructor(
    private readonly externalApiUseCaseInterface?: ExternalApiUseCaseInterface,
  ) {}

  async findAll(filters: ListCharactersFilters): Promise<Characters[]> {
    const { data } = await this.externalApiUseCaseInterface.get(
      'characters',
      filters,
    );
    this.characters = data.results;

    return this.characters;
  }

  async findById(id: number): Promise<Characters> {
    const characterIndex = this.characters.findIndex(
      (character) => character.id == id,
    );

    return this.characters[characterIndex];
  }

  async find(): Promise<Characters[]> {
    return this.characters;
  }
}
