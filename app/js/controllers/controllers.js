/**
 * @author vikash
 * @date : 25/09/2015
 */
//var app = angular.module('testApp', []);
var phonecatControllers = angular.module('driversController', []);
phonecatControllers.controller('driversController', function($scope) {
    $scope.driversList = [
      {
          fName: 'Sebastian',
          lName: 'Vettel',
          ossId: 322,
          email: "German",
          address: "Red Bull",
          gender: "Male",
      },
      {
    	  fName: 'Fernando',
    	  lName: 'Alonso',
          ossId: 207,
          email: "Spanish",
          address: "Red Bull",
          gender: "Female",
      }
    ];
    $scope.addTodo = function() {
        $scope.driversList.push({
        	 fName: $scope.user.fName,
             lName: $scope.user.lName,
             ossId: $scope.user.ossId,
             email: $scope.user.email,
             address: $scope.user.address,
             gender: $scope.user.gender,
        });
        $scope.user = '';
      };
      
      $scope.searchFilter = function (driver) {
    	    var keyword = new RegExp($scope.nameFilter, 'i');
    	    return !$scope.nameFilter || keyword.test(driver.Driver.fName) || keyword.test(driver.Driver.lName);
      };
});
//app.controller('TodoListController', function() {
//    var todoList = this;
//    todoList.todos = [
//      {text:'learn angular', done:true},
//      {text:'build an angular app', done:false}];
// 
//    todoList.addTodo = function() {
//      todoList.todos.push({text:todoList.todoText, done:false});
//      todoList.todoText = '';
//    };
// 
//    todoList.remaining = function() {
//      var count = 0;
//      angular.forEach(todoList.todos, function(todo) {
//        count += todo.done ? 0 : 1;
//      });
//      return count;
//    };
// 
//    todoList.archive = function() {
//      var oldTodos = todoList.todos;
//      todoList.todos = [];
//      angular.forEach(oldTodos, function(todo) {
//        if (!todo.done) todoList.todos.push(todo);
//      });
//    };
//  });