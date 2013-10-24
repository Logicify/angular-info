'use strict';

angular.module('angularApp', ['user.controllers', 'common.directives', '7min.controllers', 'Logicify.directives'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/greet.html'
			})
			.when('/7min', {
				templateUrl: 'views/7min/index.html'
			})
			.when('/user', {
				templateUrl: 'views/user/index.html',
				controller: 'userList'
			})
			.otherwise({
				templateUrl:'404.html'
			});
	});
