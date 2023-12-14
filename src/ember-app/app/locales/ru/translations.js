import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFotokiosk1ИнфоФотоLForm from './forms/i-i-s-fotokiosk1-инфо-фото-l';
import IISFotokiosk1КлиентLForm from './forms/i-i-s-fotokiosk1-клиент-l';
import IISFotokiosk1ОплатаLForm from './forms/i-i-s-fotokiosk1-оплата-l';
import IISFotokiosk1ОтправНаПочтуLForm from './forms/i-i-s-fotokiosk1-отправ-на-почту-l';
import IISFotokiosk1ПечатьФотоLForm from './forms/i-i-s-fotokiosk1-печать-фото-l';
import IISFotokiosk1СделатьФотоLForm from './forms/i-i-s-fotokiosk1-сделать-фото-l';
import IISFotokiosk1ИнфоФотоEForm from './forms/i-i-s-fotokiosk1-инфо-фото-e';
import IISFotokiosk1КлиентEForm from './forms/i-i-s-fotokiosk1-клиент-e';
import IISFotokiosk1ОплатаEForm from './forms/i-i-s-fotokiosk1-оплата-e';
import IISFotokiosk1ОтправНаПочтуEForm from './forms/i-i-s-fotokiosk1-отправ-на-почту-e';
import IISFotokiosk1ПечатьФотоEForm from './forms/i-i-s-fotokiosk1-печать-фото-e';
import IISFotokiosk1СделатьФотоEForm from './forms/i-i-s-fotokiosk1-сделать-фото-e';
import IISFotokiosk1ДопНастройкиModel from './models/i-i-s-fotokiosk1-доп-настройки';
import IISFotokiosk1ИнфоФотоModel from './models/i-i-s-fotokiosk1-инфо-фото';
import IISFotokiosk1КлиентModel from './models/i-i-s-fotokiosk1-клиент';
import IISFotokiosk1ОплатаModel from './models/i-i-s-fotokiosk1-оплата';
import IISFotokiosk1ОтправНаПочтуModel from './models/i-i-s-fotokiosk1-отправ-на-почту';
import IISFotokiosk1ПечатьФотоModel from './models/i-i-s-fotokiosk1-печать-фото';
import IISFotokiosk1СделатьФотоModel from './models/i-i-s-fotokiosk1-сделать-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk1-доп-настройки': IISFotokiosk1ДопНастройкиModel,
    'i-i-s-fotokiosk1-инфо-фото': IISFotokiosk1ИнфоФотоModel,
    'i-i-s-fotokiosk1-клиент': IISFotokiosk1КлиентModel,
    'i-i-s-fotokiosk1-оплата': IISFotokiosk1ОплатаModel,
    'i-i-s-fotokiosk1-отправ-на-почту': IISFotokiosk1ОтправНаПочтуModel,
    'i-i-s-fotokiosk1-печать-фото': IISFotokiosk1ПечатьФотоModel,
    'i-i-s-fotokiosk1-сделать-фото': IISFotokiosk1СделатьФотоModel
  },

  'application-name': 'Fotokiosk1',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fotokiosk1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk1',
          title: 'Fotokiosk1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        fotokiosk1: {
          caption: 'Fotokiosk1',
          title: 'Fotokiosk1',
          'i-i-s-fotokiosk1-инфо-фото-l': {
            caption: 'Инфо фото',
            title: ''
          },
          'i-i-s-fotokiosk1-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-fotokiosk1-отправ-на-почту-l': {
            caption: 'Отправ на почту',
            title: ''
          },
          'i-i-s-fotokiosk1-сделать-фото-l': {
            caption: 'Сделать фото',
            title: ''
          },
          'i-i-s-fotokiosk1-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'i-i-s-fotokiosk1-оплата-l': {
            caption: 'Оплата',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-fotokiosk1-инфо-фото-l': IISFotokiosk1ИнфоФотоLForm,
    'i-i-s-fotokiosk1-клиент-l': IISFotokiosk1КлиентLForm,
    'i-i-s-fotokiosk1-оплата-l': IISFotokiosk1ОплатаLForm,
    'i-i-s-fotokiosk1-отправ-на-почту-l': IISFotokiosk1ОтправНаПочтуLForm,
    'i-i-s-fotokiosk1-печать-фото-l': IISFotokiosk1ПечатьФотоLForm,
    'i-i-s-fotokiosk1-сделать-фото-l': IISFotokiosk1СделатьФотоLForm,
    'i-i-s-fotokiosk1-инфо-фото-e': IISFotokiosk1ИнфоФотоEForm,
    'i-i-s-fotokiosk1-клиент-e': IISFotokiosk1КлиентEForm,
    'i-i-s-fotokiosk1-оплата-e': IISFotokiosk1ОплатаEForm,
    'i-i-s-fotokiosk1-отправ-на-почту-e': IISFotokiosk1ОтправНаПочтуEForm,
    'i-i-s-fotokiosk1-печать-фото-e': IISFotokiosk1ПечатьФотоEForm,
    'i-i-s-fotokiosk1-сделать-фото-e': IISFotokiosk1СделатьФотоEForm
  },

});

export default translations;
