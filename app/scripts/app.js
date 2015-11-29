'use strict';

/**
 * @ngdoc overview
 * @name chesshiveFrameApp
 * @description
 * # chesshiveFrameApp
 *
 * Main module of the application.
 */
angular
  .module('chesshiveFrameApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
