import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';
import { ExternalApiUseCaseInterface } from '@/application/protocols/exteral-api/external-api-usecase-interface';
import { ListCharactersFilters } from '@/domain/models/characters';
import credentials from '@/infra/config/api-credentials';

@Injectable()
export class ExternalApiUseCase implements ExternalApiUseCaseInterface {
  private readonly baseURL = credentials.baseURl;
  private readonly ts = credentials.ts;
  private readonly privateKey = credentials.privateKey;
  private readonly publicKey = credentials.publicKey;

  async get(model: string, filters?: ListCharactersFilters): Promise<any> {
    let filter = `&offset=${filters.offset}&limit=${filters.limit}`;
    if (filters.characterName)
      filter = filter + `&nameStartsWith=${filters.characterName}`;
    const hash = crypto
      .createHash('md5')
      .update(this.ts + this.privateKey + this.publicKey)
      .digest('hex');
    const url =
      `${this.baseURL}/${model}?ts=${this.ts}&apikey=${this.publicKey}&hash=${hash}` +
      filter;
    const response = await axios.get(url);

    return response.data;
  }
}
