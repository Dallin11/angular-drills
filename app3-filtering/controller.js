angular.module('app').controller('ctrl', function($scope, svc){

$scope.data = svc.getData();


});