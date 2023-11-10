import { FeatureBaseModel } from './feature-base.model';

export interface AbilityModel {
  ability: FeatureBaseModel;
  is_hidden: boolean;
  slot: number;
}
