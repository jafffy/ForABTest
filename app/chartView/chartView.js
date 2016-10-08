'use strict';

angular.module('myApp.chartView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/chartView', {
		templateUrl: 'chartView/chartView.html',
		controller: 'ChartViewCtrl'
	});
}])

.controller('ChartViewCtrl', [function() {

}]);