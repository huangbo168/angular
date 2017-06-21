 var m=angular.module('myApp',[])


// m.directive('hello',function(){
//     return{
//         restrict: 'AE',
//         replace:true,
//         scope:{},
//         template: '<div><input type="text" ng-model="userName">{{userName}}</div>'      
//     }
// });

m.controller('myCtrl',function(){
    $scope.name={1,2,3,4}
});


