import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fotokiosk1-инфо-фото-l');
  this.route('i-i-s-fotokiosk1-инфо-фото-e',
  { path: 'i-i-s-fotokiosk1-инфо-фото-e/:id' });
  this.route('i-i-s-fotokiosk1-инфо-фото-e.new',
  { path: 'i-i-s-fotokiosk1-инфо-фото-e/new' });
  this.route('i-i-s-fotokiosk1-клиент-l');
  this.route('i-i-s-fotokiosk1-клиент-e',
  { path: 'i-i-s-fotokiosk1-клиент-e/:id' });
  this.route('i-i-s-fotokiosk1-клиент-e.new',
  { path: 'i-i-s-fotokiosk1-клиент-e/new' });
  this.route('i-i-s-fotokiosk1-оплата-l');
  this.route('i-i-s-fotokiosk1-оплата-e',
  { path: 'i-i-s-fotokiosk1-оплата-e/:id' });
  this.route('i-i-s-fotokiosk1-оплата-e.new',
  { path: 'i-i-s-fotokiosk1-оплата-e/new' });
  this.route('i-i-s-fotokiosk1-отправ-на-почту-l');
  this.route('i-i-s-fotokiosk1-отправ-на-почту-e',
  { path: 'i-i-s-fotokiosk1-отправ-на-почту-e/:id' });
  this.route('i-i-s-fotokiosk1-отправ-на-почту-e.new',
  { path: 'i-i-s-fotokiosk1-отправ-на-почту-e/new' });
  this.route('i-i-s-fotokiosk1-печать-фото-l');
  this.route('i-i-s-fotokiosk1-печать-фото-e',
  { path: 'i-i-s-fotokiosk1-печать-фото-e/:id' });
  this.route('i-i-s-fotokiosk1-печать-фото-e.new',
  { path: 'i-i-s-fotokiosk1-печать-фото-e/new' });
  this.route('i-i-s-fotokiosk1-сделать-фото-l');
  this.route('i-i-s-fotokiosk1-сделать-фото-e',
  { path: 'i-i-s-fotokiosk1-сделать-фото-e/:id' });
  this.route('i-i-s-fotokiosk1-сделать-фото-e.new',
  { path: 'i-i-s-fotokiosk1-сделать-фото-e/new' });
});

export default Router;
