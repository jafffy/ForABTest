'use strict';

angular.module('myApp.diagnosisCompleteView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/diagnosisCompleteView', {
		templateUrl: 'diagnosisCompleteView/diagnosisCompleteView.html',
		controller: 'DiagnosisCompleteViewCtrl'
	});
}])

.controller('DiagnosisCompleteViewCtrl', ['$scope', function($scope){
}]);