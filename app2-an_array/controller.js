angular.module('app').controller('ctrl', function($scope, svc){

$scope.arrInfo = svc.getData()


});