/**
 * Created by indiegente on 2/4/15.
 */
'use strict';
angular.module('priceandesApp.controllers')
    .controller('Pricing', function ($scope,formBuilderService) {
        $scope.message = 'Funciona Mi Controller';
        $scope.idProducto = 1;
        $scope.errorMessage = '';
        $scope.getComponents = function(){
            formBuilderService.getFormComponents($scope.idProducto).then(function(response) {
                $scope.components = response.data.conceptos;

            }, function(){
                $scope.message = 'Could not obtain data';
            });
        };
        $scope.getComponents();

        $scope.schema = {
            type: 'object',
            properties: {
                name: {
                    title: 'Producto',
                    type: 'string'
                },
                nick: {
                    title: 'Nick',
                    type: 'string'
                },
                alias: {
                    title: 'Alias',
                    type: 'string'
                },
                tag: {
                    title: 'Tag',
                    type: 'string'
                }
            }
        };

        $scope.form = [
            'name',
            {
                type: 'tabs',
                tabs: [
                    {
                        title: 'Tab 1',
                        items: [
                            'nick',
                            'alias'
                        ]
                    },
                    {
                        title: 'Tab 2',
                        items: [
                            'tag'
                        ]
                    }
                ]
            },
            {
                type: 'submit',
                title: 'Save'
            }
        ];

        $scope.model = {};
        $scope.onSubmit = function(form) {
            var car = {name:'Fiat', title:'Fiat', type:'string'};
            $scope.schema.properties.fiat=car;
            $scope.form[1].tabs[1].items.push('Fiat');
            console.log($scope.model);
            // First we broadcast an event so all fields validate themselves
            $scope.$broadcast('schemaFormValidate');
            // Then we check if the form is valid
            if (form.$valid) {
                // ... do whatever you need to do with your data.
            }
        };
});