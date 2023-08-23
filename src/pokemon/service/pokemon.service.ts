import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PokemonService {
  /**
   *
   */
  constructor(private readonly service: HttpService) {}
  baseApiPokemon() {
    return this.service.get('https://pokeapi.co/api/v2/pokemon');
  }
}
