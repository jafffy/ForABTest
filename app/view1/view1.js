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
  $scope.title = subjectInfo.getTitle();
  $scope.lastContent = "";

  $scope.elapsedTime = 0;
  $scope.isElapsedTimeStarted = false;

  $scope.lastModifiedTime = 0;

  $interval(function() {
    if ($scope.isElapsedTimeStarted == false)
      return;

    $scope.elapsedTime += 1;
	  $scope.lastModifiedTime += 1;

    if ($scope.lastModifiedTime > 5)
      $scope.adviceContent = "마주하기 힘든 기억이더라도, 용기를 내보세요!";
    else if (Math.abs($scope.elapsedTime - 60 * 15) < 3)
      $scope.adviceContent = "15분 지났습니다.";
    else if (Math.abs($scope.elapsedTime - 60 * 30) < 3)
      $scope.adviceContent = "30분 지났습니다.";
    else
      $scope.adviceContent = defaultAdviceContent;
  }, 1000);

  $scope.loadBasicContent = function() {
    $scope.content = "이번엔 조금 다른 얘기이야기를 해보자. 이것은 지사제에 관한 이야기다.오늘도 일상을 삼켰다. 그것은 곧 복통을 수반할테지만, 나는 익숙하다는 듯 부엌서랍을 열어 미리 타놓은 지사레를 입에 털어넣을 것이다.지사제를 타는 방법은 간단하다. 물이 담긴 컵에 고개를 뭍고 더 한 것도 겪어봤어. 를 침 튀겨 소리쳐라. 더 한 것도 겪어봤어, 더 한 것도 겪어봤어 그리곤 가볍게 원샷.주의할 점. 온 몸이 만싱창이여도, 절대 약의 매듬새를 탓하지 말 것. 내 몸이 이 모양인 이유는, 내가 그 약을 제대로 소화하지 못했기 때문임을 되뇌일 것. 그렇게 약을 소화하는 데만 온 신경을 뿌리내린ㅊ ㅐ 침대에 눕는다.캄캄한 방안에 홀로 누워, 캄캄한 방안에 홀로라는 곡을 듣는다. 더할나위 없는 고단함이 방 안을 에워싸면, 이내 복통은 가라앉아있을테니까. 수많은 오타가 난무해도 지울 수 없는 이 망할 메모장처럼, 연필 자국 가득한- 내 앰생이 향하는 곳은 어딜까. 나는 현재 React를 공부중이다. 모든 개발자 지망 학생들에게 신의 가호가 있길.이 모든 단상들은 결국 '앰생' 한 단어로 귀결된다.이 길고 긴 정황들을 설명하지 않고도 내 감정을 전달할 수 있으니 얼마나 깔끔한 단어인가.";
  };
  $scope.loadAdviceContent = function() {
    $scope.adviceContent = "마주하기 힘든 기억이더라도, 용기를 내보세요!";
  }

  var defaultAdviceContent = "자신의 마음 속 이야기를 글로 쓰고 마주하세요! 마음이 한결 가벼워질 거에요.";
  $scope.adviceContent = defaultAdviceContent;
  $scope.getAdviceContent = function() {

    return $scope.adviceContent;
  };

  var realIP = '54.186.195.78';
	$scope.submitSubjectInfo = function() {
	  if (false && $scope.elapsedTime < 15 * 60) {
	    $window.alert("아직 15분이 되지 않았습니다.");
	    return;
    }

		subjectInfo.setContent($scope.content);
		$http.post('http://' + realIP + ':3000', subjectInfo.getAll());
    $location.path("/wordMatchingView");
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
    $scope.lastModifiedTime = 0;

    if (!$scope.content.startsWith($scope.lastContent)) {
      $scope.content = $scope.lastContent;
    } else {
      $scope.lastContent = $scope.content;
    }
  };
}]);