(function(){
  'use strict';
  angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
$scope.name;
$scope.txt;
$scope.checkcontent=function(){
  if (!$scope.name) {
    $scope.txt="Please enter data first";
  }
  else{
  var  $items = $scope.name.split(",");
    $scope.txt = $items.length <= 3? 'Enjoy!' : 'Too much!';
  };
};
};


})();
