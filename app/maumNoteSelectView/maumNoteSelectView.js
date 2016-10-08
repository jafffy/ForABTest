'use strict';

angular.module('myApp.maumNoteSelectView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/maumNoteSelectView', {
		templateUrl: 'maumNoteSelectView/maumNoteSelectView.html',
		controller: 'MaumNoteSelectViewCtrl'
	});
}])

.controller('MaumNoteSelectViewCtrl', ['$scope', '$location', function($scope, $location){
	$scope.nextPage = function() {
		$location.path('/addMaumNoteView');
		console.log("asdfsa");
	}
}]);