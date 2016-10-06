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

.controller('SurveyFormCtrl',
	["$scope", "subjectInfo",
		function($scope, subjectInfo) {
	$scope.subjectID = "";
	$scope.type = "A";
	$scope.gender = "F";

	$scope.passSubjectInfo = function() {
		subjectInfo.setSubjectID($scope.subjectID);
		subjectInfo.setType($scope.type);
		subjectInfo.setGender($scope.gender);
	}
}])

.factory('subjectInfo', [function() {
	var subjectID = -1;
	var type = "A";
	var gender = "F";

	return {
		setSubjectID: function(sid) { subjectID = sid; },
		setType: function(type_) { type = type_; },
		setGender: function(gender_) { gender = gender_; }
	}
}]);