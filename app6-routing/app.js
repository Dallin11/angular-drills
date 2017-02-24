angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when("", '/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'signup.html'
        })
        .state('details', {
            url: '/details',
            templateUrl: 'details.html'
        })

    $urlRouterProvider.otherwise('/');
        

})