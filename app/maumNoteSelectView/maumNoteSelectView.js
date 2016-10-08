'use strict';

angular.module('myApp.maumNoteSelectView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/maumNoteSelectView', {
		templateUrl: 'maumNoteSelectView/maumNoteSelectView.html',
		controller: 'maumNoteSelectViewCtrl'
	});
}])

.controller('MaumNoteSelectViewCtrl', ['$scope', function($scope){
}]);