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
	var content = "";
	var title = "";

	return {
		setSubjectID: function(sid) { subjectID = sid; },
		setType: function(type_) { type = type_; },
		setGender: function(gender_) { gender = gender_; },
		setContent: function(content_) { content = content_; },
    setTitle: function(title_) { title = title_; },
		getSubjectID: function() { return subjectID; },
		getType: function() { return type; },
		getGender: function() { return gender; },
		getAll: function() { return {
			subjectID: subjectID,
			type: type,
			gender: gender,
			content: content,
			title: title
		};}
	};
}]);