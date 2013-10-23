'use strict';

angular.module('user.controllers', [])
	.controller('userList', ['$scope', '$rootScope', '$location',
		function ($scope, $rootScope) {
			var _target = "views/user/greet.html";
			$scope.users = [
				{
					_id: '1',
					firstName: 'Ivan',
					lastName: 'Ivanov',
					email: '1@1.com'
				},
				{
					_id: '2',
					firstName: 'Sergey',
					lastName: 'Sergeev',
					email: '1@1.com'
				}
			];
			var users = $scope.users,
				_id = 2;

			$scope.target = _target;
			$rootScope.title = 'User management...';

			$scope.open = function (id) {
				$scope.target = 'views/user/edit.html';
				if (typeof id !== 'undefined') {
					$scope.user = users[id];
				} else {
					$scope.user = {};
				}
			};


			$scope.edit = function () {
				if (!$scope.user._id) {
					$scope.user._id = ++_id;
					users.push($scope.user);
				}
				$scope.target = _target;
				$rootScope.$emit('successAlert', 'User data successfully updated');
			};

			$scope.delete = function (_id) {
				if (typeof _id === 'undefined') {
					_id = $scope.users.indexOf($scope.user);
				}
				$scope.users.splice(_id, 1);
				$scope.target = _target;
				$rootScope.$emit('successAlert', 'User successfully deleted');
			};
		}])
	.controller('Alerts', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
		//sample alert object {type:['error','success'], message:'message'}
		var alerts = $scope.alerts = [],
			close = $scope.close = function (id) {
				alerts.splice(id, 1);
			},
			types = ['success', 'error'],
			_hide = function () {
				$timeout(function () {
					close(0);
				}, 2000);
			};

		$rootScope.$on('successAlert', function (e, message) {
			alerts.push({type: types[0], message: message});
			_hide();
		});

		$rootScope.$on('errorAlert', function (e, error) {
			var message = 'Some errors occurred...';
			if (error.data && error.data.error) {
				message = error.data.error;
			}
			alerts.push({type: types[1], message: message});
			_hide();
		});
	}]);