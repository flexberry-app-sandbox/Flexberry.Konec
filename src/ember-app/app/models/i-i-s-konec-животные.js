import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЖивотныеMixin
} from '../mixins/regenerated/models/i-i-s-konec-животные';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЖивотныеMixin, Validations, {
});

defineProjections(Model);

export default Model;
