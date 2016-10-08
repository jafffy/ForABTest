'use strict';

angular.module('myApp.addMaumNoteView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/addMaumNoteView', {
		templateUrl: 'addMaumNoteView/addMaumNoteView.html',
		controller: 'AddMaumNoteViewCtrl'
	});
}])

.controller('AddMaumNoteViewCtrl', ['$scope', function($scope){
}]);