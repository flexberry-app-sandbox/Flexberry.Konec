import {
  defineNamespace,
  defineProjections,
  Model as СоставВольераMixin
} from '../mixins/regenerated/models/i-i-s-konec-состав-вольера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставВольераMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
