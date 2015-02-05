'use strict';

/**
 * @ngdoc overview
 * @name priceandesApp
 * @description
 * # priceandesApp
 *
 * Main module of the application.
 */
angular
  .module('priceandesApp', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ngRoute',
    'priceandesApp.controllers'
  ]).config(function($routeProvider, $locationProvider){
    $routeProvider.when('/',{
        controller:'MainCtrl',
        templateUrl:'/modules/pricing/views/main.html'
    }).when('/pricing',{
        controller: 'Pricing',
        templateUrl:'/modules/pricing/views/pricing.html'
    }).when('/contact',{
        controller: 'MainCtrl',
        templateUrl:'/modules/pricing/views/contact.html'
    }).otherwise({redirectTo:'/'});
    $locationProvider.html5Mode(true);
    });