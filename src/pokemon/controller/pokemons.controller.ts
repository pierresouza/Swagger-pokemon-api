import { PokemonService } from '../service/pokemon.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PokeDto } from '../dto/poke.dto';

@Controller('v2/pokemons')
@ApiTags('pokemon-resource')
export class PokemonController {
  /**
   *
   */
  constructor(private readonly service: PokemonService) {}

  @Get('/pokemon')
  @ApiResponse({
    status: 200,
    description: 'Buscas dos Pokemons.',
    type: PokeDto,
  })
  async getBaseApiPokemon() {
    const res = await this.service.baseApiPokemon().toPromise();
    return res.data;
  }
}
