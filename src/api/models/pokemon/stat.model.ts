import { FeatureBaseModel } from './feature-base.model';

export interface StatModel {
  base_stat: number;
  effort: number;
  stat: FeatureBaseModel;
}
