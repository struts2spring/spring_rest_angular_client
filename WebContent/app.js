angular.module('controllerExample', []).controller('SettingsController2',
	[ '$scope', '$http', SettingsController2 ]);

function SettingsController2($scope, $http) {
//	$scope.name = "C:\\Users\\vk82286\\git\\spring_rest\\src\\main\\";
	$scope.files = [];
	$scope.command={
			"name" : "home",
			"value" : $scope.name
		};

	$scope.file = function() {
		// alert($scope.name);
		var urlBase = "http://localhost:8080";
		$http.defaults.headers.post["Content-Type"] = "application/json";
		$http
		.post(
			urlBase + '/shell/command',
			$scope.command).success(function(data, status, headers) {
				console.log(data);
				$scope.data = [];
				$scope.data = data;
				$scope.files = [];
				$scope.files.push($scope.data);
			});
		};
		
		$scope.dir = function() {
			// alert($scope.name);
			$scope.command={
					"name" : "home",
					"value" : $scope.name
				};
			var urlBase = "http://localhost:8080";
			$http.defaults.headers.post["Content-Type"] = "application/json";
			$http
			.post(
				urlBase + '/command/cmd',
				$scope.command).success(function(data, status, headers) {
					
					$scope.data = [];
					$scope.data = data;
					$scope.files = [];
					$scope.files.push($scope.data[0]);
					console.log($scope.files);
				});
			};

		}
