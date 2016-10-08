'use strict';

angular.module('myApp.addMaumNoteView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/addMaumNoteView', {
		templateUrl: 'addMaumNoteView/addMaumNoteView.html',
		controller: 'AddMaumNoteViewCtrl'
	});
}])

.controller('AddMaumNoteViewCtrl', ['$scope', '$location', "subjectInfo", function($scope, $location, subjectInfo){
	$scope.title = "";
	$scope.nextPage = function() {
		subjectInfo.setTitle($scope.title);
		$location.path('/view1');
	};
}]);