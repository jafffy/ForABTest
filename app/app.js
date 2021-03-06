'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'chart.js',
  'myApp.surveyForm',
  'myApp.descriptionForm',
  'myApp.view1',
  'myApp.view2',
  'myApp.chartView',
  'myApp.diagnosisCompleteView',
  'myApp.addMaumNoteView',
  'myApp.wordMatchingView',
  'myApp.maumNoteSelectView',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/maumNoteSelectView'});
}]);
