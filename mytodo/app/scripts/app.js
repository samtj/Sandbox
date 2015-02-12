'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'btford.dragon-drop',
    'sampleModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      //.when('/sample', {
      //          templateUrl: '../bower_components/sample-component/app/views/sample.html',
      //          controller: 'SampleCtrl'
      //      })
      .when('/home', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
      .otherwise({
        redirectTo: '/'
      });
  });
