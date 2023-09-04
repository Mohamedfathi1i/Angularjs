'use strict';

// Define the `phonecatApp` module
var app = angular.module('myApp', []);
app.controller('firstController', appModule)

appModule.$inject = ['$scope'];

function appModule($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

}

