import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.caption'),
          title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.caption'),
            title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.title'),
            children: [{
              link: 'i-i-s-konec-виды-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-konec-виды-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-konec-виды-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-konec-животные-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-konec-животные-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-konec-животные-l.title'),
              icon: 'chart line',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.caption'),
            title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.title'),
            children: [{
              link: 'i-i-s-konec-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-konec-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-konec-сотрудники-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-konec-должность-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-konec-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-konec-должность-l.title'),
              icon: 'edit',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.вольеры.caption'),
            title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.вольеры.title'),
            children: [{
              link: 'i-i-s-konec-уборка-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.вольеры.i-i-s-konec-уборка-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.вольеры.i-i-s-konec-уборка-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-konec-вольер-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.вольеры.i-i-s-konec-вольер-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.вольеры.i-i-s-konec-вольер-l.title'),
              icon: 'list',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})