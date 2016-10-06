/**
 * Created by jaewon-choi on 06/10/2016.
 */
'use strict';

angular.module('myApp.surveyForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/surveyForm', {
		templateUrl: 'surveyForm/surveyForm.html',
		controller: 'SurveyFormCtrl'
	});
}])

.controller('SurveyFormCtrl', ["$scope", function($scope) {
	$scope.type = "A";
	$scope.gender = "F";
}]);