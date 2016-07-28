<?php 
	include_once "include/include.php";
	$token = get_token();
	$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token={$token}";
	$postBody = '{
	     "button":[
	     {	
	          "type":"view",
	          "name":"我的简历",
	          "url":"http://www.maii.me"
	      },
	      {
	           "name":"我的项目",
	           "sub_button":[
	           {	
	               "type":"view",
	               "name":"灭菌",
	               "url":"http://www.maii.me/archie/index.html"
	            },
	            {
	               "type":"view",
	               "name":"社区",
	               "url":"http://www.maii.me/nodejs/index.html"
	            },
	            {
	               "type":"view",
	               "name":"迪斯尼",
	               "url":"http://www.maii.me/dol/index.html"
	            }]
	       },{
	       	"type":"view",
	       	"name":"联系方式",
	       	"url":"http://www.maii.me/connect_me.html"
	       }]
	 }'
	$res = httpPost($url,$postBody);
	echo $res;
 ?>