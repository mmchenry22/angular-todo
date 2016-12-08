angular.module('TodoDirective', [])

.directive('todoTable', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/todo-table.html'
	};
})

.directive('createAccount', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/create-account.html'
	};
})

.directive('logIn', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/log-in.html'
	};
});