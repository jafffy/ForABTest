'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.surveyForm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',
  ["$scope", "$window", "$http", "subjectInfo",
    function($scope, $window, $http, subjectInfo) {
	$scope.submitSubjectInfo = function() {
		subjectInfo.setContent($scope.content);
		$http.post('http://localhost:3300/post', subjectInfo.getAll());
  };
  $scope.content = "";
}]);