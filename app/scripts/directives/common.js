'use strict';

angular.module('commonDirectives', [])
	.directive('kosTitle', function () {
		return {
			link: function (scope) {
				scope.title = scope.title || 'My First Angular app';
			}
		};
	});