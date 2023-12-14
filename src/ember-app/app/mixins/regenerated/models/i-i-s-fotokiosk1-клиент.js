import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  оплата: DS.belongsTo('i-i-s-fotokiosk1-оплата', { inverse: null, async: false }),
  отправНаПочту: DS.belongsTo('i-i-s-fotokiosk1-отправ-на-почту', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-fotokiosk1-клиент.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-fotokiosk1-клиент.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отправНаПочту: {
    descriptionKey: 'models.i-i-s-fotokiosk1-клиент.validations.отправНаПочту.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-fotokiosk1-клиент', {
    iD: attr('ID', { index: 0 }),
    отправНаПочту: belongsTo('i-i-s-fotokiosk1-отправ-на-почту', 'Отправ на почту', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    оплата: belongsTo('i-i-s-fotokiosk1-оплата', 'Оплата', {
      время: attr('Время', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'время' })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-fotokiosk1-клиент', {
    iD: attr('ID', { index: 0 }),
    отправНаПочту: belongsTo('i-i-s-fotokiosk1-отправ-на-почту', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    оплата: belongsTo('i-i-s-fotokiosk1-оплата', 'Время', {
      время: attr('Время', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
