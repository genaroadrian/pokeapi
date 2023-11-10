import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, tap } from 'rxjs';
import { PokeParams } from '@api/classes/poke-params';
import { PokemonService } from '@api/services/pokemon.service';
import { IPokeParams } from '@api/interfaces/poke-params.interface';
import { IPokemonDetail } from '@api/interfaces/pokemon/pokemon-detail.interface';
import { PokemonDetail } from '@api/classes/pokemon/pokemon-detail';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
  animations: [
    trigger('zoom', [
      state('normal', style({ transform: 'scale(1)' })),
      state('zoomed', style({ transform: 'scale(1.2)' })),
      transition('normal <=> zoomed', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class PokemonCardComponent {
  @Input() name!: string;
  pokemon: IPokemonDetail = new PokemonDetail();
  zoomState: 'normal' | 'zoomed' = 'normal';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemonByName().subscribe();
  }

  toggleZoom() {
    this.zoomState = this.zoomState === 'normal' ? 'zoomed' : 'normal';
  }

  getPokemonByName() {
    return this.pokemonService.getByName(this.name).pipe(
      tap((pokemon) => {
        this.pokemon = pokemon;
      })
    );
  }
}
