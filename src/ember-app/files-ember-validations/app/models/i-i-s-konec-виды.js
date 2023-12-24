import {
  defineNamespace,
  defineProjections,
  Model as ВидыMixin
} from '../mixins/regenerated/models/i-i-s-konec-виды';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВидыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
