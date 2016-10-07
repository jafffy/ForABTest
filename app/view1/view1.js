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
  $scope.content = "";
  $scope.title = "";
  $scope.lastContent = "";

  var realIP = '54.186.195.78';
	$scope.submitSubjectInfo = function() {
		subjectInfo.setContent($scope.content);
    subjectInfo.setTitle($scope.title);
		$http.post('http://' + realIP + ':3000', subjectInfo.getAll());
    $location.path("/view2");
  };
  $scope.getRowCount = function() {
    if (subjectInfo.getType() == "A") {
      return 4;
    } else {
      return 12;
    }
  };

  $scope.getFontSize = function() {
    if (subjectInfo.getType() == "A") {
      return 30;
    } else {
      return 15;
    }
  };

  $scope.change = function() {
    if (!$scope.content.startsWith($scope.lastContent)) {
      $scope.content = $scope.lastContent;
    } else {
      $scope.lastContent = $scope.content;
    }
  };
}]);