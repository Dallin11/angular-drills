angular.module('app').service('svc', function($http){

    
var baseUrl = 'http://swapi.co/api/people/'
this.getData = function(num){
    return $http({
        url: baseUrl + num,
        method: 'GET'
    }).then(function(response){
        if(response.status === 200) {
            return response.data;
        }  else {
            return 'Error ' + response.status;
        }

    })
}







})