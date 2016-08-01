var app = angular.module("node");
app.controller("mainCtr",function ($scope,$http,$rootScope) {
	$scope.getDataFromPageNum = function (pageNum,sort) {
		if (sort) {
			var url = "http://cnodejs.org/api/v1/topics?limit=10&page="+pageNum+"&tab="+sort;
		}else {
			var url = "http://cnodejs.org/api/v1/topics?limit=10&page="+pageNum;
		}
		$http({
			method:"get",
			url:url
		}).success(function (res) {
			$scope.allData = res.data;
		})   
	}
	$scope.getDataFromPageNum(1);
})