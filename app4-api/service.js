angular.module('app').service('svc', function($http){
    this.data = function(){
        return $http.get('http://swapi.co/api/planets/1/').then(response => {
            return response.data;
        })
    }
})