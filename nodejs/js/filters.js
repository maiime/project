var filter = angular.module('filters',[]);
filter.filter("unique",function () {
	 return function (arr,name) {
	 	 if (angular.isArray(arr)) {
	 	 	var tempArr = [];
	 	 	var obj ={};
	 	 	for (var i = 0; i < arr.length; i++) {
	 	 		if (!obj[arr[i][name]]) {
	 	 			obj[arr[i][name]] = true;
	 	 			tempArr.push(arr[i][name]);
	 	 		}
	 	 	}
	 	 	return tempArr;
	 	 }else {
	 	 	return [];
	 	 }
	 } 
})

filter.filter("time_init",function () {
	 return function (time) {
	 	 if (time) {
	 	 	var x = makeDate(time)
	 	 } 
	 	 return x;
	 } 
})

filter.filter("to_trusted",['$sce',function ($sce) {
	 return function (text) {  
            return $sce.trustAsHtml(text);  
      }   
}])

function makeDate(date) {
    try {
        var date = new Date(date).toISOString().
            replace(/T/, ' ').
            replace(/\..+/, '');
    }catch(e){
        var date = "0000-00-00 00:00:00";
    }finally{
        return date;
    }

};

