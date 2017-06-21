var m=angular.module('myApp',['ngRoute']);
 //模块的定义

m.controller('myCtrl',['$scope',function($scope){
    $scope.name="强子";
}]);
//控制器的定义

m.directive('hello',function(){
    return{
        restrict:'AE',
        template:'<div>大家早上好</div>',
        replace:true
    }
});
//自定义指令的定义
