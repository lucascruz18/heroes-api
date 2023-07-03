import { AddFavoriteCharacter } from '@/domain/usecases/favorite-characters/add-favorite-character.interface';
import { FavoriteCharacters } from '@/domain/models/favorite-characters';
import { AddFavoriteCharactersController } from '@/presentation/controllers/favorite-characters/add-favorite-character-controller';

const makeFakeRequest = (): any => ({
  params: {
    characterId: 100,
  },
});

const makeFakeCharacter = (): FavoriteCharacters => ({
  id: 123,
  name: 'any_name',
  description: 'any_description',
});

const makeAddFavoriteCharacter = (): AddFavoriteCharacter => {
  class AddFavoriteCharacterStub implements AddFavoriteCharacter {
    async add(characterId: number): Promise<FavoriteCharacters> {
      return await new Promise((resolve) => resolve(makeFakeCharacter()));
    }
  }
  return new AddFavoriteCharacterStub();
};

interface SutTypes {
  sut: AddFavoriteCharactersController;
  addFavoriteCharacterStub: AddFavoriteCharacter;
}

const makeSut = (): SutTypes => {
  const addFavoriteCharacterStub = makeAddFavoriteCharacter();
  const sut = new AddFavoriteCharactersController(addFavoriteCharacterStub);
  return {
    sut,
    addFavoriteCharacterStub,
  };
};

describe('Add Favorite Character controller', () => {
  test('Should call AddFavoriteCharacter with correct values', async () => {
    const { sut, addFavoriteCharacterStub } = makeSut();
    const addSpy = jest.spyOn(addFavoriteCharacterStub, 'add');
    const httpRequest = makeFakeRequest();
    await sut.handle(httpRequest);
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body);
  });

  test('Should return error if AddFavoriteCharacter throws', async () => {
    const { addFavoriteCharacterStub } = makeSut();
    jest.spyOn(addFavoriteCharacterStub, 'add').mockRejectedValue(new Error());
    await expect(
      addFavoriteCharacterStub.add(makeFakeRequest()),
    ).rejects.toThrow();
  });

  test('Should return statusCode 200 and character added on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(makeFakeCharacter());
  });
});
