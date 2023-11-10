import { MoveModel } from '../moves/move.model';
import { SpriteModel } from '../sprites/sprite.interface';
import { AbilityModel } from './ability.model';
import { FeatureBaseModel } from './feature-base.model';
import { GameIndexModel } from './game-index.model';
import { SpecieModel } from './specie.model';
import { StatModel } from './stat.model';
import { TypeModel } from './type.model';

export interface PokemonDetailModel {
  abilities: AbilityModel[];
  base_experience: number;
  forms: FeatureBaseModel[];
  game_indices: GameIndexModel[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveModel[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: SpecieModel;
  sprites: SpriteModel;
  stats: StatModel[];
  types: TypeModel[];
  weight: number;
}
