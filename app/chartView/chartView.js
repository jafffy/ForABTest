'use strict';

var app = angular.module('myApp.chartView', ['ngRoute', 'chart.js']);


app.service('dataService', function($http) {
	delete $http.defaults.headers.common['X-Requested-With'];
	this.getData = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/users?userID=1',
		});
	};
	this.getWords = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/words'
		});
	};
});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/chartView', {
		templateUrl: 'chartView/chartView.html',
		controller: 'ChartViewCtrl'
	});
}])

.controller('ChartViewCtrl',
	['$scope', '$location', 'dataService',
		function($scope, $location, dataService) {
	$scope.responseFromServer = null;
  dataService.getData().then(function(dataResponse) {
		$scope.responseFromServer = dataResponse;
	  console.log($scope.responseFromServer);
  });

	$scope.series = ['총 단어 개수', '진단 결과'];
	$scope.labels = ["날짜 1", "날짜 2", "날짜 3"];
	$scope.data = [
		[569, 278, 137],
		[22.21, 12.96, 14]
	];
	$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	$scope.options = {
		scales: {
			yAxes: [{
				id: 'y-axis-1',
				type: 'linear',
				display: true,
				position: 'left'
			}, {
				id: 'y-axis-2',
				type: 'linear',
				display: true,
				position: 'right'
			}]
		}
	};
	$scope.nextPage = function() {
		$location.path('/maumNoteSelectView');
	}
}]);