'use strict';

/**
 * @ngdoc overview
 * @name secureCommgithubioApp
 * @description
 * # secureCommgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('seccommApp', [
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
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
