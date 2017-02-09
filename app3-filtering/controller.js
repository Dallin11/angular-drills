angular.module('app').controller('ctrl', function($scope, svc){


$scope.getData = function(){
    $scope.data = svc.getData();

}
$scope.getData();
    
})