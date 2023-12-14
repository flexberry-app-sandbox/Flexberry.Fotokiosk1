import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  видОплаты: DS.attr('i-i-s-fotokiosk1-вид-оплаты'),
  время: DS.attr('string'),
  дата: DS.attr('date'),
  сумма: DS.attr('number'),
  сделатьФото: DS.belongsTo('i-i-s-fotokiosk1-сделать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-fotokiosk1-оплата.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  видОплаты: {
    descriptionKey: 'models.i-i-s-fotokiosk1-оплата.validations.видОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-fotokiosk1-оплата.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-fotokiosk1-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-fotokiosk1-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сделатьФото: {
    descriptionKey: 'models.i-i-s-fotokiosk1-оплата.validations.сделатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-fotokiosk1-оплата', {
    id: attr('Id', { index: 0 }),
    видОплаты: attr('Вид оплаты', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    время: attr('Время', { index: 4 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk1-сделать-фото', 'Сделать фото', {
      колВоФото: attr('Кол во фото', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'колВоФото' })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-fotokiosk1-оплата', {
    id: attr('Id', { index: 0 }),
    видОплаты: attr('Вид оплаты', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    время: attr('Время', { index: 4 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk1-сделать-фото', 'Кол во фото', {
      колВоФото: attr('Кол во фото', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
