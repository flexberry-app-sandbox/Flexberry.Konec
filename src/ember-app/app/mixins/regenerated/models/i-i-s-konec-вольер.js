import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  площадь: DS.attr('string'),
  типВольера: DS.attr('i-i-s-konec-тип-вольера'),
  составВольера: DS.hasMany('i-i-s-konec-состав-вольера', { inverse: 'вольер', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-konec-вольер.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-konec-вольер.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типВольера: {
    descriptionKey: 'models.i-i-s-konec-вольер.validations.типВольера.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  составВольера: {
    descriptionKey: 'models.i-i-s-konec-вольер.validations.составВольера.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВольерE', 'i-i-s-konec-вольер', {
    номер: attr('Номер', { index: 0 }),
    типВольера: attr('Тип вольера', { index: 1 }),
    площадь: attr('Площадь', { index: 2 }),
    составВольера: hasMany('i-i-s-konec-состав-вольера', 'Состав вольера', {
      животные: belongsTo('i-i-s-konec-животные', 'Животные', {
        кличка: attr('Кличка', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'кличка' })
    })
  });

  modelClass.defineProjection('ВольерL', 'i-i-s-konec-вольер', {
    номер: attr('Номер', { index: 0 }),
    типВольера: attr('Тип вольера', { index: 1 }),
    площадь: attr('Площадь', { index: 2 })
  });
};
