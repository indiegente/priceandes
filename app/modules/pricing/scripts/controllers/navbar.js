'use strict';

/**
 * @ngdoc function
 * @name priceandesApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the priceandesApp
 */
angular.module('priceandesApp.controllers')
    .controller('NavCtrl', function ($scope) {
        $scope.navoptions =
            [
                { name: 'Cotización', url: '/pricing', style: 'nav-header'},
                { name: 'Seguimiento', url: '/bmp'},
                { name: 'Clientes', url: '/customers'},
                { name: 'Parametros', url: '/parameters'}
            ];
    });