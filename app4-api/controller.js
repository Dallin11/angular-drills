angular.module('app').controller('ctrl', function($scope, svc){

    svc.data().then(response => {
        $scope.data = response;
    })

})
