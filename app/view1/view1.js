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
    "$interval",
    function($scope, $window, $http, $location, subjectInfo, $interval) {
  $scope.content = "";
  $scope.title = "";
  $scope.lastContent = "";

  $scope.elapsedTime = 0;
  $scope.isElapsedTimeStarted = false;

  $interval(function() {
    if ($scope.isElapsedTimeStarted == false)
      return;

    $scope.elapsedTime += 1;

    if (Math.abs($scope.elapsedTime - 60 * 15) < 3)
      $scope.adviceContent = "15분 지났습니다.";
    else if (Math.abs($scope.elapsedTime - 60 * 30) < 3)
      $scope.adviceContent = "30분 지났습니다.";
    else if (Math.abs($scope.elapsedTime - 5) < 3)
      $scope.adviceContent = "5초 지났습니다.";
    else
      $scope.adviceContent = defaultAdviceContent;
  }, 1000);

  var defaultAdviceContent = "자신의 마음 속 이야기를 글로 쓰고 마주하세요! 마음이 한결 가벼워질 거에요.";
  $scope.adviceContent = defaultAdviceContent;
  $scope.getAdviceContent = function() {

    return $scope.adviceContent;
  };

  var realIP = '54.186.195.78';
	$scope.submitSubjectInfo = function() {
	  if ($scope.elapsedTime < 15 * 60) {
	    $window.alert("아직 15분이 되지 않았습니다.");
	    return;
    }

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
    return 28;
    /*
    if (subjectInfo.getType() == "A") {
      return 30;
    } else {
      return 15;
    }
    */
  };

  $scope.change = function() {
    $scope.isElapsedTimeStarted = true;

    if (!$scope.content.startsWith($scope.lastContent)) {
      $scope.content = $scope.lastContent;
    } else {
      $scope.lastContent = $scope.content;
    }
  };
}]);