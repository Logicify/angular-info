'use strict';

var routeUrl = 'http://localhost\\:3000';

angular.module('userServices', ['ngResource'])
	.factory('User', ['$resource', function ($resource) {
		return $resource(routeUrl + '/api/user/:_id', {_id: '@_id'}, {
			put: {method: 'PUT'}
		});
	}])
	.factory('UserList', ['$resource', function ($resource) {
		return $resource(routeUrl + '/api/users');
	}]);