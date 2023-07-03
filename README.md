# NestJS Clean Architecure - Marvel Api Integration

API REST construída para se integrar com api da marvel.

Nesse projeto foi utilizado NestJS com conceitos de clean arquitecture.

## Funcionalidades

- Listagem de todos os personagens.
- Listagem de personagens com filtro pelo nome.
- Adicionar um personagem como favorito.
- Remover um personagem dos favoritos.
- Listar personagens favoritos.

## Setup App

Para que a heroes-api possa se comunicar com a MARVEL API, será necessário configurar
as seguintes variáveis de ambiente:

- EXTERNAL_API_BASE_URL (endpoint marvel api)
- EXTERNAL_API_TS (timestamp)
- EXTERNAL_API_PUBLIC_KEY (Sua chave pública)
- EXTERNAL_API_PRIVATE_KEY (Sua chave privada)

Para mais informações, acesse o Portal para desenvolvedores da Marvel: [Marvel for Developers](https://developer.marvel.com)

## Running App

### Start Dev Server
```yarn start:dev```

## Running App With Docker

### Building Image
```docker build -t heroes-api .```

### Building Container
```docker container run --name teste -p 5050:5050 heroes-api```

## Routes

### Characters

#### List

**GET**: ``http://localhost:5050/characters``

**RESPONSE**
~~~javascript
[
  {
    "id": 1009368,
    "name": "Iron Man",
    "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
  }
]
~~~

### Favorite Characters

#### Favorite a character
**POST**: ``http://localhost:5050/characters/favorite/:characterId``

**PARAM**
``characterId: number``

**RESPONSE**
~~~javascript
[
  {
    "id": 1009368,
    "name": "Iron Man",
    "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
  }
]
~~~

#### UnFavorite a character

**DELETE**: ``http://localhost:5050/characters/unfavorite/:characterId``

**PARAM**
``characterId: number``

**RESPONSE**
~~~javascript
{
	"message": "Favorite character deleted."
}
~~~

#### List Favorites

**GET**: ``http://localhost:5050/characters/favorite``

**RESPONSE**
~~~javascript
[
  {
    "id": 1009368,
    "name": "Iron Man",
    "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
  }
]
~~~
