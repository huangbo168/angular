var m=angular.module('myApp',[]);

m.controller('myCtrl',['$scope',function($scope){
    $scope.loadDate=function(){
        console.log("加载数据...");
    }
}]);
m.controller('myCtrl2',['$scope',function($scope){
    $scope.loadDate2=function(){
        console.log("加载数据2...");
    }
}]);

m.directive('loader',function(){
    return{
        restrict:'AE',
        link:function(scope,element,attr){
            element.bind('mouseenter',function(){
               // scope.loadDate();
                //scope.$apply('loadDate()');
                scope.$apply(attr.loaddatafn);
            });
        }
    }
});