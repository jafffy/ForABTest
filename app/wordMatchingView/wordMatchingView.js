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
	var count = 0;

  dataService.getWords().then(function(dataResponse) {
    $scope.words = dataResponse.data['words'];

    var card = null;
	  for (var i = 0; i < $scope.words.length; ++i) {
	    if (i % 4 == 0) {
	    	if (card != null) {
	    	  $scope.cards.push(card);
        }
        card = [];
      }
			var c = {name: $scope.words[i], isClicked: false, color: "#C8C8C8",
      fontColor: "#898989"};
      card.push(c);
    }

    $scope.cards.push(card);
  });

	var colorList = ["#4368BA", "#AFAF1E", "#FA605B", "#2FD1B2", "#FCC106"]

  $scope.setColor = function(c) {
    if (c.isClicked)
      return;

    /*
	  if (count >= 5) {
	    return;
    }
    */
    count += 1;
    c.isClicked = true;

    var colorPicker = Math.floor(Math.random() * 5);

    c.color = colorList[colorPicker];
    c.fontColor = "#fff";
  };
  $scope.setHoverColor = function(c) {
    if (c.isClicked) {
      return;
    }
    c.color = "#898989";
    c.fontColor = "#fff";
  };
  $scope.setLeaveColor = function(c) {
    if (c.isClicked) {
      return;
    }
    c.color = "#C8C8C8";
    c.fontColor = "#898989";
  };

  $scope.nextPage = function() {
    $location.path('/chartView');
  };
}]);