angular.module('app').service('svc', function($http){

this.getData = function(){
    return $http({
        url: 'http://swapi.co/api/people/1/',
        method: 'GET'
    }).then(function(response){
        if(response.status === 200){
            return response.data;
        } else {
            return 'Error'
        }
    })


}



})
