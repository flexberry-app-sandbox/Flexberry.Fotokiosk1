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
          caption: i18n.t('forms.application.sitemap.fotokiosk1.caption'),
          title: i18n.t('forms.application.sitemap.fotokiosk1.title'),
          children: [{
            link: 'i-i-s-fotokiosk1-инфо-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-инфо-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-инфо-фото-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-fotokiosk1-клиент-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-клиент-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-fotokiosk1-отправ-на-почту-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-отправ-на-почту-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-отправ-на-почту-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-fotokiosk1-сделать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-сделать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-сделать-фото-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-fotokiosk1-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-печать-фото-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-fotokiosk1-оплата-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk1.i-i-s-fotokiosk1-оплата-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})