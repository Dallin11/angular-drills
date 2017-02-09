angular.module('app').controller('ctrl', function($scope, svc){



$scope.getData = function(){
    svc.getData().then(function(response){
        $scope.data = response;
    })
}
$scope.getData();


})
