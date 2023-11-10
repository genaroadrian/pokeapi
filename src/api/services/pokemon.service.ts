import { Injectable } from '@angular/core';
import { PokemonDetail } from '@api/classes/pokemon/pokemon-detail';
import { IPokemonDetail } from '@api/interfaces/pokemon/pokemon-detail.interface';
import { IPokemon } from '@api/interfaces/pokemon/pokemon.interface';
import { Repository } from '@api/repository/repository';
import { plainToClass } from 'class-transformer';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService extends Repository<IPokemon> {
  constructor() {
    super('pokemon');
  }

  getByName(name: string): Observable<IPokemonDetail> {
    return this.getById<IPokemonDetail>(name).pipe(
      map((pokemon) => plainToClass(PokemonDetail, pokemon))
    );
  }
}
