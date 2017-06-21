var m=angular.module('myApp',[]);

m.controller('myCtrl',['$scope',function($scope){
    $scope.loadDate=function(){
        console.log("加载数据...");
    }
}]);

m.directive('loader',function(){

});