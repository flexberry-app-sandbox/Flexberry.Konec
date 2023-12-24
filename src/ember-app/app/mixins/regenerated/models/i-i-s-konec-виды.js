import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  местоОбитания: DS.attr('string'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  местоОбитания: {
    descriptionKey: 'models.i-i-s-konec-виды.validations.местоОбитания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-konec-виды.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидыE', 'i-i-s-konec-виды', {
    наименование: attr('Наименование', { index: 0 }),
    местоОбитания: attr('Место обитания', { index: 1 })
  });

  modelClass.defineProjection('ВидыL', 'i-i-s-konec-виды', {
    наименование: attr('Наименование', { index: 0 }),
    местоОбитания: attr('Место обитания', { index: 1 })
  });
};
