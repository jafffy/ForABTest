'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.surveyForm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',
  ["$scope", "$window", "$http", "$location", "subjectInfo",
    function($scope, $window, $http, $location, subjectInfo) {
  var realIP = '54.186.195.78';
	$scope.submitSubjectInfo = function() {
		subjectInfo.setContent($scope.content);
		$http.post('http://' + realIP + ':3000', subjectInfo.getAll());
    $location.path("/view2");
  };
  $scope.content = "";
}])