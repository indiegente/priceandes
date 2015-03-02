'use strict';
angular.module('priceandesApp').factory('ProductRetriever', function($http, $q, $timeout){
    var ProductRetriever = {};

    ProductRetriever.getAllProducts = function(type) {
        var deferred = $q.defer();
        var data = ['Quinua', 'Maiz', 'Frijol Ojo Negro', 'Pallares', 'Palla', 'Frijol Canario', 'Habas', 'Gandules', 'Gandules Verdes'];
        $timeout(function(){
            deferred.resolve(data);
        },1000);
        return deferred.promise;
    };
    return ProductRetriever;
});