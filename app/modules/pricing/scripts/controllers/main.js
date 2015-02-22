'use strict';

/**
 * @ngdoc function
 * @name priceandesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the priceandesApp
 */
angular.module('priceandesApp.controllers')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.templates =
            [
                { name: 'main.html', url: 'views/main.html', controlador: 'MainCtrl'},
                { name: 'pricing.html', url: 'views/pricing.html', controlador: ''}
            ];
        $scope.template = $scope.templates[0];
        $scope.slogan = 'Managing only the best.';
    });