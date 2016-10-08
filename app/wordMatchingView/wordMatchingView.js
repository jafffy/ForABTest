/**
 * Created by MSI_1 on 10/7/2016.
 */

'use strict';

var app = angular.module('myApp.wordMatchingView', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wordMatchingView', {
    templateUrl: 'wordMatchingView/wordMatchingView.html',
    controller: 'WordMatchingViewCtrl'
  });
}])

.controller('WordMatchingViewCtrl',
  ["$scope", "$location", "dataService",
    function($scope, $location, dataService) {
  $scope.words = null;
  $scope.cards = [];
  dataService.getWords().then(function(dataResponse) {
	  var data = JSON.parse('{' + dataResponse.data + '}');
    $scope.words = data['words'];

    var card = null;
	  for (var i = 0; i < $scope.words.length; ++i) {
	    if (i % 4 == 0) {
	    	if (card != null) {
	    	  $scope.cards.push(card);
        }
        card = [];
      }

      card.push({name: $scope.words[i]});
    }

    $scope.cards.push(card);
  });

	var colorList = ["#4368BA", "#AFAF1E", "#FA605B", "#2FD1B2", "#FCC106"]

	$scope.color = ["", "#C8C8C8", "#C8C8C8", "#C8C8C8", "#C8C8C8", "#C8C8C8"];
  $scope.fontColor = ["", "#898989", "#898989", "#898989", "#898989", "#898989"];
	$scope.isClicked = [false, false, false, false, false, false];

  $scope.setColor = function(i) {
    if ($scope.isClicked[i])
      return;
    $scope.isClicked[i] = true;

    var colorPicker = Math.floor(Math.random() * 5);

    $scope.color[i] = colorList[colorPicker]; // "#4368BA";
    $scope.fontColor[i] = "#fff";
  };
  $scope.setHoverColor = function(i) {
    if ($scope.isClicked[i]) {
      return;
    }
    $scope.color[i] = "#898989";
    $scope.fontColor[i] = "#fff";
  };
  $scope.setLeaveColor = function(i) {
    if ($scope.isClicked[i]) {
      return;
    }
    $scope.color[i] = "#C8C8C8";
    $scope.fontColor[i] = "#898989";
  };

  $scope.nextPage = function() {
    $location.path('/chartView');
  };
}]);