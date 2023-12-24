import {
  defineNamespace,
  defineProjections,
  Model as ВольерMixin
} from '../mixins/regenerated/models/i-i-s-konec-вольер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВольерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
