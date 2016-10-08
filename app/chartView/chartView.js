'use strict';

angular.module('myApp.chartView', ['ngRoute', 'chart.js'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/chartView', {
		templateUrl: 'chartView/chartView.html',
		controller: 'ChartViewCtrl'
	});
}])

.controller('ChartViewCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.series = ['Series A', 'Series B'];
	$scope.data = [
		[ {x: 0, y: 10}, {x: 1, y: 1}, {x: 2, y: 6}, {x: 5, y: 2} ],
		[ {x: 0, y: 2}, {x: 2, y: 7}, {x: 4, y: 2}, {x: 5, y: 9}]
	];
	$scope.options = {
		scales: {
			xAxes: [{
				type: 'linear',
				position: 'bottom'
			}]
		}
	};
	$scope.nextPage = function() {
		$location.path('/maumNoteSelectView');
	}
}]);