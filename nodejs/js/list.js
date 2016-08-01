var app = angular.module("node");
app.controller("listCtr",function ($scope,$rootScope) {
	$scope.showContent = function (obj) {
		$rootScope.content = obj;
		console.log($scope.content)
	}

})