import { FeatureBaseModel } from '../pokemon/feature-base.model';

export interface VersionGroupDetailModel {
  level_learned_at: number;
  move_learn_method: FeatureBaseModel;
  version_group: FeatureBaseModel;
}
