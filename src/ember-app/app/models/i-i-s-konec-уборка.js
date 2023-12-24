import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УборкаMixin
} from '../mixins/regenerated/models/i-i-s-konec-уборка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УборкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
