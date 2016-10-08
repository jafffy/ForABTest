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
	$scope.labels = ["날짜 1", "날짜 2", "날짜 3", "날짜 4"];
	$scope.data = [
		[3, 4, 5, 6],
		[5, 3, 4, 2]
	];
	$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
	$scope.options = {
		scales: {
			yAxes: [{
				id: 'y-axis-1',
				type: 'linear',
				display: true,
				position: 'left'
			}]
		}
	};
	$scope.nextPage = function() {
		$location.path('/maumNoteSelectView');
	}
}]);