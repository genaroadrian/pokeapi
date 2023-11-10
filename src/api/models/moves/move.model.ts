import { FeatureBaseModel } from '../pokemon/feature-base.model';
import { VersionGroupDetailModel } from './version-group-detail.model';

export interface MoveModel {
  move: FeatureBaseModel;
  version_group_details: VersionGroupDetailModel[];
}
