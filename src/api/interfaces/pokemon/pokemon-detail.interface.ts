import { PokemonDetailModel } from '@api/models/pokemon/pokemon-detail.model';

export interface IPokemonDetail extends PokemonDetailModel {
  avatar: string;
  hp: number;
  mainType: string;
  backgrounColor: string;
  attack: number;
  defense: number;
  speed: number;
}
