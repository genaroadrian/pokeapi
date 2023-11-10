import { IPokemonDetail } from '@api/interfaces/pokemon/pokemon-detail.interface';
import { MoveModel } from '@api/models/moves/move.model';
import { AbilityModel } from '@api/models/pokemon/ability.model';
import { FeatureBaseModel } from '@api/models/pokemon/feature-base.model';
import { GameIndexModel } from '@api/models/pokemon/game-index.model';
import { SpecieModel } from '@api/models/pokemon/specie.model';
import { StatModel } from '@api/models/pokemon/stat.model';
import { TypeModel } from '@api/models/pokemon/type.model';
import { SpriteModel } from '@api/models/sprites/sprite.interface';
import { Expose } from 'class-transformer';

export class PokemonDetail implements IPokemonDetail {
  @Expose()
  abilities: AbilityModel[] = [];

  @Expose()
  base_experience!: number;

  @Expose()
  forms: FeatureBaseModel[] = [];

  @Expose()
  game_indices: GameIndexModel[] = [];

  @Expose()
  height!: number;

  @Expose()
  held_items: any[] = [];

  @Expose()
  id!: number;

  @Expose()
  is_default!: boolean;

  @Expose()
  location_area_encounters!: string;

  @Expose()
  moves: MoveModel[] = [];

  @Expose()
  name!: string;

  @Expose()
  order!: number;

  @Expose()
  past_abilities: any[] = [];

  @Expose()
  past_types: any[] = [];

  @Expose()
  species!: SpecieModel;

  @Expose()
  sprites!: SpriteModel;

  @Expose()
  stats: StatModel[] = [];

  @Expose()
  types: TypeModel[] = [];

  @Expose()
  weight!: number;

  get avatar() {
    return (
      this.sprites?.other?.home?.front_default ??
      this.sprites?.front_default ??
      ''
    );
  }

  get hp() {
    return this.stats.find((stat) => stat.stat.name == 'hp')?.base_stat ?? 0;
  }

  get attack() {
    return (
      this.stats.find((stat) => stat.stat.name == 'attack')?.base_stat ?? 0
    );
  }

  get defense() {
    return (
      this.stats.find((stat) => stat.stat.name == 'defense')?.base_stat ?? 0
    );
  }

  get speed() {
    return this.stats.find((stat) => stat.stat.name == 'speed')?.base_stat ?? 0;
  }

  get mainType() {
    return this.types[0]?.type?.name ?? '';
  }

  get backgrounColor() {
    const type = this.mainType;
    return TYPE_COLOR[type] ?? DEFAULT_COLOR;
  }
}
const DEFAULT_COLOR = '#000';
const TYPE_COLOR: { [key: string]: string } = {
  bug: '#26de81',
  dragon: '#ffeaa7',
  electric: '#fed330',
  fairy: '#FF0069',
  fighting: '#30336b',
  fire: '#f0932b',
  flying: '#81ecec',
  grass: '#00b894',
  ground: '#EFB549',
  ghost: '#a55eea',
  ice: '#74b9ff',
  normal: '#95afc0',
  poison: '#6c5ce7',
  psychic: '#a29bfe',
  rock: '#2d3436',
  water: '#0190FF',
};
