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
    'schemaForm',
    'priceandesApp.controllers'
  ]).config(function($routeProvider, $locationProvider,$httpProvider){
    $routeProvider.when('/',{
        controller:'MainCtrl',
        templateUrl:'views/main.html'
    }).when('/pricing',{
        controller: 'Pricing',
        templateUrl:'views/pricing.html'
    }).when('/customers',{
        controller: 'CustomerCtrl',
        templateUrl:'views/customers.html'
    }).when('/contact',{
        controller: 'MainCtrl',
        templateUrl:'views/contact.html'
    }).otherwise({redirectTo:'/'});
    $locationProvider.html5Mode(true);
    $httpProvider.defaults.headers.common.Accept="applcation/json";
    });
angular
    .module('priceandesApp').factory('formBuilderService',function($http){
        return {
            getWeather: function(city, country){
                return $http.get('http://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: 'Lima,Peru'
                    }
                });
            },
            getFormComponents: function(idProducto){ //se encarga de traer la informacion para construir el Form
                return $http.get('components.js', {
                    params: {
                        q: 'Quinua'
                    }
                });
            },
            addFormComponent: function(idForm, componente){ //se encarga de agregar el componente al Form

            },
            savePricing: function(formBuilt, idProducto){ // guarda en la base de datos la cotizacion.

            }
        }
    });
angular.module('priceandesApp.controllers',[]);