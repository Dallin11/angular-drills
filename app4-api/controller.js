angular.module('app').controller('ctrl', function($scope, svc) {


$scope.num = 1;
    
$scope.getData = function(){
    svc.getData($scope.num).then(function(response){
        $scope.data = response;
    })
}

$scope.getData();

$scope.changeNum = function() {
    $scope.getData($scope.num);
}



})