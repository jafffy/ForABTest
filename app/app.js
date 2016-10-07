'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.surveyForm',
  'myApp.descriptionForm',
  'myApp.view1',
  'myApp.view2',
  'myApp.wordMatchingView',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/surveyForm'});
}]);
