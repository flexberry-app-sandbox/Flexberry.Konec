import {
  defineNamespace,
  defineProjections,
  Model as УборкаMixin
} from '../mixins/regenerated/models/i-i-s-konec-уборка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УборкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
