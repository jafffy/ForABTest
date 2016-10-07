'use strict';

angular.module('myApp.descriptionForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/descriptionForm', {
    templateUrl: 'descriptionForm/descriptionForm.html',
    controller: 'DescriptionFormCtrl'
  });
}])

.controller('DescriptionFormCtrl', [function() {

}]);