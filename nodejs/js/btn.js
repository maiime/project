var app = angular.module("node");
app.controller("btnCtr",function ($scope,$http) {
	$scope.clickObj = 'all';
	$scope.addClick = function (sort) {
		if (sort == 'all') {
			$scope.getDataFromPageNum(1);
			$scope.clickObj = 'all';
			$scope.data = $scope.all;
		}else {
			$scope.getDataFromPageNum(1,sort);
			$scope.clickObj = sort;

		}

	}
	$scope.addBtnClass = function (sort) {
		return ($scope.clickObj == sort) ? "btn-success" : "";
	}
	$scope.addBtnClass('all');
})