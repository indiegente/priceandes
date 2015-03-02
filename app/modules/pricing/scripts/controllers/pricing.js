/**
 * Created by indiegente on 2/4/15.
 */
'use strict';
angular.module('priceandesApp.controllers')
    .controller('Pricing', function ($scope,CustomerRetriever,ProductRetriever) {
        $scope.message = 'Nueva Cotizacion';
        $scope.idProducto = 1;
        $scope.errorMessage = '';
        $scope.getAllProducts = function(type){
          return ProductRetriever.getAllProducts(type);
        };
        $scope.getAllCustomers = function(type){
            return CustomerRetriever.getAllCustomers(type);
        };
});