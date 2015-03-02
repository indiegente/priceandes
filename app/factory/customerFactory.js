'use strict';
angular.module('priceandesApp').factory('CustomerRetriever', function($http, $q, $timeout){
    var CustomerRetriever = {};

    CustomerRetriever.getAllCustomers = function(type) {
        var deferred = $q.defer();
        var data = ['The Wolverine', 'The Smurfs 2', 'The Mortal Instruments: City of Bones', 'Drinking Buddies', 'All the Boys Love Mandy Lane', 'The Act Of Killing', 'Red 2', 'Jobs', 'Getaway', 'Red Obsession', '2 Guns', 'The World\'s End', 'Planes', 'Paranoia', 'The To Do List', 'Man of Steel'];
        $timeout(function(){
            deferred.resolve(data);
        },1000);
        return deferred.promise;
    };
    return CustomerRetriever;
});