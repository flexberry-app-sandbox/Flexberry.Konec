import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-konec-виды-l');
  this.route('i-i-s-konec-виды-e',
  { path: 'i-i-s-konec-виды-e/:id' });
  this.route('i-i-s-konec-виды-e.new',
  { path: 'i-i-s-konec-виды-e/new' });
  this.route('i-i-s-konec-вольер-l');
  this.route('i-i-s-konec-вольер-e',
  { path: 'i-i-s-konec-вольер-e/:id' });
  this.route('i-i-s-konec-вольер-e.new',
  { path: 'i-i-s-konec-вольер-e/new' });
  this.route('i-i-s-konec-должность-l');
  this.route('i-i-s-konec-должность-e',
  { path: 'i-i-s-konec-должность-e/:id' });
  this.route('i-i-s-konec-должность-e.new',
  { path: 'i-i-s-konec-должность-e/new' });
  this.route('i-i-s-konec-животные-l');
  this.route('i-i-s-konec-животные-e',
  { path: 'i-i-s-konec-животные-e/:id' });
  this.route('i-i-s-konec-животные-e.new',
  { path: 'i-i-s-konec-животные-e/new' });
  this.route('i-i-s-konec-сотрудники-l');
  this.route('i-i-s-konec-сотрудники-e',
  { path: 'i-i-s-konec-сотрудники-e/:id' });
  this.route('i-i-s-konec-сотрудники-e.new',
  { path: 'i-i-s-konec-сотрудники-e/new' });
  this.route('i-i-s-konec-уборка-l');
  this.route('i-i-s-konec-уборка-e',
  { path: 'i-i-s-konec-уборка-e/:id' });
  this.route('i-i-s-konec-уборка-e.new',
  { path: 'i-i-s-konec-уборка-e/new' });
});

export default Router;
