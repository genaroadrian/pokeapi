import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, mergeMap, takeUntil, tap } from 'rxjs';
import { PokemonService } from '@api/services/pokemon.service';
import { PokemonCardComponent } from '@components/pokemon-card/pokemon-card.component';
import { IPokemon } from '@api/interfaces/pokemon/pokemon.interface';
import { PokeParams } from '@api/classes/poke-params';
import { IPokeParams } from '@api/interfaces/poke-params.interface';
import { BaseComponent } from '@core/components/base.component';
import { PaginationComponent } from '@components/pagination/pagination.component';
import { IPagination } from '@core/interfaces/pagination.interface';
import { Pagination } from '@core/classes/pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, PaginationComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent extends BaseComponent {
  pokemons: IPokemon[] = [];
  $params = new BehaviorSubject(new PokeParams());
  pagination: IPagination = new Pagination();
  constructor(private pokemonService: PokemonService) {
    super();
  }

  ngOnInit() {
    this.$params
      .pipe(
        takeUntil(this.$unsubscribe),
        mergeMap((params) => this.getAllPokemons(params))
      )
      .subscribe();
  }

  getAllPokemons(params: IPokeParams) {
    return this.pokemonService.getAllPaginated(params.getParams()).pipe(
      tap((response) => {
        this.pokemons = response.results;
        this.pagination = new Pagination(response.count);
      })
    );
  }
}
