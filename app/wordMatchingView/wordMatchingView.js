/**
 * Created by MSI_1 on 10/7/2016.
 */

'use strict';

angular.module('myApp.wordMatchingView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wordMatchingView', {
    templateUrl: 'wordMatchingView/wordMatchingView.html',
    controller: 'WordMatchingViewCtrl'
  });
}])

.controller('WordMatchingViewCtrl', [function() {

}]);