import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKonecВидыLForm from './forms/i-i-s-konec-виды-l';
import IISKonecВольерLForm from './forms/i-i-s-konec-вольер-l';
import IISKonecДолжностьLForm from './forms/i-i-s-konec-должность-l';
import IISKonecЖивотныеLForm from './forms/i-i-s-konec-животные-l';
import IISKonecСотрудникиLForm from './forms/i-i-s-konec-сотрудники-l';
import IISKonecУборкаLForm from './forms/i-i-s-konec-уборка-l';
import IISKonecВидыEForm from './forms/i-i-s-konec-виды-e';
import IISKonecВольерEForm from './forms/i-i-s-konec-вольер-e';
import IISKonecДолжностьEForm from './forms/i-i-s-konec-должность-e';
import IISKonecЖивотныеEForm from './forms/i-i-s-konec-животные-e';
import IISKonecСотрудникиEForm from './forms/i-i-s-konec-сотрудники-e';
import IISKonecУборкаEForm from './forms/i-i-s-konec-уборка-e';
import IISKonecВидыModel from './models/i-i-s-konec-виды';
import IISKonecВольерModel from './models/i-i-s-konec-вольер';
import IISKonecДолжностьModel from './models/i-i-s-konec-должность';
import IISKonecЖивотныеModel from './models/i-i-s-konec-животные';
import IISKonecСоставВольераModel from './models/i-i-s-konec-состав-вольера';
import IISKonecСотрудникиModel from './models/i-i-s-konec-сотрудники';
import IISKonecУборкаModel from './models/i-i-s-konec-уборка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-konec-виды': IISKonecВидыModel,
    'i-i-s-konec-вольер': IISKonecВольерModel,
    'i-i-s-konec-должность': IISKonecДолжностьModel,
    'i-i-s-konec-животные': IISKonecЖивотныеModel,
    'i-i-s-konec-состав-вольера': IISKonecСоставВольераModel,
    'i-i-s-konec-сотрудники': IISKonecСотрудникиModel,
    'i-i-s-konec-уборка': IISKonecУборкаModel
  },

  'application-name': 'Konec',

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
        'application-name': 'Konec',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Konec',
          title: 'Konec'
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
        'з-о-о-п-а-р-к': {
          caption: 'ЗООПАРК',
          title: 'ЗООПАРК',
          'учет-животных': {
            caption: 'Учет животных',
            title: 'Учет животных',
            'i-i-s-konec-виды-l': {
              caption: 'Виды',
              title: ''
            },
            'i-i-s-konec-животные-l': {
              caption: 'Животные',
              title: ''
            }
          },
          штат: {
            caption: 'Штат',
            title: 'Штат',
            'i-i-s-konec-сотрудники-l': {
              caption: 'Сотрудники',
              title: ''
            },
            'i-i-s-konec-должность-l': {
              caption: 'Должность',
              title: ''
            }
          },
          вольеры: {
            caption: 'Вольеры',
            title: 'Вольеры',
            'i-i-s-konec-уборка-l': {
              caption: 'Уборка',
              title: ''
            },
            'i-i-s-konec-вольер-l': {
              caption: 'Вольер',
              title: ''
            }
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
    'i-i-s-konec-виды-l': IISKonecВидыLForm,
    'i-i-s-konec-вольер-l': IISKonecВольерLForm,
    'i-i-s-konec-должность-l': IISKonecДолжностьLForm,
    'i-i-s-konec-животные-l': IISKonecЖивотныеLForm,
    'i-i-s-konec-сотрудники-l': IISKonecСотрудникиLForm,
    'i-i-s-konec-уборка-l': IISKonecУборкаLForm,
    'i-i-s-konec-виды-e': IISKonecВидыEForm,
    'i-i-s-konec-вольер-e': IISKonecВольерEForm,
    'i-i-s-konec-должность-e': IISKonecДолжностьEForm,
    'i-i-s-konec-животные-e': IISKonecЖивотныеEForm,
    'i-i-s-konec-сотрудники-e': IISKonecСотрудникиEForm,
    'i-i-s-konec-уборка-e': IISKonecУборкаEForm
  },

});

export default translations;
