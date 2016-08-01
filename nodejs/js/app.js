var  app = angular.module("node",['filters','ngRoute']);

// 路由
app.config(function ($routeProvider) {
		$routeProvider.when('/content',{templateUrl:'template/content.html'});
		$routeProvider.when('/list',{templateUrl:'template/list.html'});
		$routeProvider.otherwise({templateUrl:'template/list.html'});
		
});

app.directive("headerTemp",function () {
	 return {
	 	transclude:true,
	 	templateUrl:"template/header.html"
	 } 
});
app.directive("btnCube",function () {
	 return {
	 	transclude:true,
	 	templateUrl:"template/btn.html"
	 } 
});


