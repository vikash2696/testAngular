/**
 * @author vikash
 * @date : 25/09/2015
 */
var testApp = angular.module('testApp', ['ngRoute', 'driversController']);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/list.html',
        controller: 'driversController'
      });
}]);