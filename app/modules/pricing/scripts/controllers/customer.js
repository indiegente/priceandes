'use strict';

/**
 * @ngdoc function
 * @name priceandesApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the priceandesApp
 */
angular.module('priceandesApp.controllers')
    .controller('CustomerCtrl', function ($scope) {
        $scope.title = '';
        $scope.pais = 'US';
        $scope.$on('country.selected', function (event, args) {
            // for example output will be "Indonesia" if I select Indonesia
            console.log('country.selected', args);
        });
    });