import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  животные: DS.belongsTo('i-i-s-konec-животные', { inverse: null, async: false }),
  вольер: DS.belongsTo('i-i-s-konec-вольер', { inverse: 'составВольера', async: false })
});

export let ValidationRules = {
  животные: {
    descriptionKey: 'models.i-i-s-konec-состав-вольера.validations.животные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вольер: {
    descriptionKey: 'models.i-i-s-konec-состав-вольера.validations.вольер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставВольераE', 'i-i-s-konec-состав-вольера', {
    животные: belongsTo('i-i-s-konec-животные', 'Животные', {
      кличка: attr('Кличка', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'кличка' })
  });
};
