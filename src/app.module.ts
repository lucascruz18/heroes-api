import { Module } from '@nestjs/common';

import { ListCharactersController } from '@/presentation/controllers/characters';
import {
  AddFavoriteCharactersController,
  ListFavoriteCharactersController,
  DeleteFavoriteCharactersController,
} from '@/presentation/controllers/favorite-characters';
import { ExternalApiUseCase } from '@/application/usecases/external-api.usecase';
import { ExternalApiUseCaseInterface } from '@/application/protocols/exteral-api/external-api-usecase-interface';
import { CharactersRepositoryInterface } from '@/application/protocols/db/character-repository-interface';
import { FavoritesCharactersRepositoryInterface } from '@/application/protocols/db/favortes-characters-repository-interface';
import { ListCharactersUseCase } from '@/application/usecases/list-characters.usecase';
import { AddFavoriteCharacterUseCase } from '@/application/usecases/add-favorite-character.usecase';
import { ListFavoriteCharactersUseCase } from '@/application/usecases/list-favorite-characters.usecase';
import { DeleteFavoriteCharacterUseCase } from '@/application/usecases/delete-favorite-character.usecase';
import { CharactersRepository } from '@/infra/database/in-memory/characters-repository';
import { FavoritesCharactersRepository } from '@/infra/database/in-memory/favorite-characters-repository';

@Module({
  imports: [],
  controllers: [
    ListCharactersController,
    AddFavoriteCharactersController,
    ListFavoriteCharactersController,
    DeleteFavoriteCharactersController,
  ],
  providers: [
    {
      provide: ExternalApiUseCase,
      useClass: ExternalApiUseCase,
    },
    {
      provide: CharactersRepository,
      useFactory: (externalApiService: ExternalApiUseCaseInterface) => {
        return new CharactersRepository(externalApiService);
      },
      inject: [ExternalApiUseCase],
    },
    {
      provide: FavoritesCharactersRepository,
      useClass: FavoritesCharactersRepository,
    },
    {
      provide: 'ListCharacters',
      useFactory: (charactersRepository: CharactersRepositoryInterface) => {
        return new ListCharactersUseCase(charactersRepository);
      },
      inject: [CharactersRepository],
    },
    {
      provide: 'AddFavoriteCharacter',
      useFactory: (
        charactersRepository: CharactersRepository,
        favoriteCharactersRepository: FavoritesCharactersRepositoryInterface,
      ) => {
        return new AddFavoriteCharacterUseCase(
          charactersRepository,
          favoriteCharactersRepository,
        );
      },
      inject: [CharactersRepository, FavoritesCharactersRepository],
    },

    {
      provide: 'ListFavoriteCharacters',
      useFactory: (
        favoriteCharactersRepository: FavoritesCharactersRepositoryInterface,
      ) => {
        return new ListFavoriteCharactersUseCase(favoriteCharactersRepository);
      },
      inject: [FavoritesCharactersRepository],
    },
    {
      provide: 'DeleteFavoriteCharacter',
      useFactory: (
        favoriteCharactersRepository: FavoritesCharactersRepositoryInterface,
      ) => {
        return new DeleteFavoriteCharacterUseCase(favoriteCharactersRepository);
      },
      inject: [FavoritesCharactersRepository],
    },
  ],
})
export class AppModule {}
