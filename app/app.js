import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';
import WOW from 'wowjs';



import portfolio from './modules/portfolio';

let App = angular.module('app', [
  'ui.router',
  'firebase',


  'nms.portfolio'
]);

function config($urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
}


// App.config(wow);
App.config(config);
