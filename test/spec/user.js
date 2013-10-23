'use strict';

describe('Testing User Module', function () {

	beforeEach(module('user.controllers'));

	describe('User controllers', function () {
		var $scope = {};

		beforeEach(inject(function ($controller) {
			$controller('userList', {$scope: $scope});
		}));

		it('Should place test data', function () {
			expect($scope.users.length).toBe(2);
		});

		it('Should open edit form', function () {
			$scope.open();
			expect($scope.user).toBeDefined();
		});

		it('Should create new user', function () {
			$scope.open();
			$scope.user.firstName = 'aa';
			$scope.user.lastName = 'bb';
			$scope.edit();
			expect($scope.users.length).toBe(3);
		});

		it('Should delete a user', function () {
			$scope.delete();
			expect($scope.users.length).toBe(1);
		});

		it('Should add two users and then delete one', function () {
			for (var i = 0; i < 2; i++) {
				$scope.open();
				$scope.user.firstName = 'aa';
				$scope.user.lastName = 'bb';
				$scope.edit();
			}
			$scope.delete();
			expect($scope.users.length).toBe(3);
		});

	});

	describe('Testing Alert Messages', function () {

		var $scope = {}, ctrl, $rootScope = {};

		beforeEach(inject(function ($controller, _$rootScope_) {
			$rootScope = _$rootScope_;
			ctrl = $controller('Alerts', {$scope: $scope});
		}));

		it('Should show and then hide a modal view', function () {
			//emit new message
			$rootScope.$emit('successAlert', '');
			expect($scope.alerts.length).toBe(1);

			//close it
			$scope.close();
			expect($scope.alerts.length).toBe(0);

			//emit new error message and check for autoclose
			$rootScope.$emit('errorAlert', '');
			setTimeout(function(){
				expect($scope.alerts.length).toBe(0);
			},2000);
		});

	});
});