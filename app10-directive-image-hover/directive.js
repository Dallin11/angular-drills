angular.module('app').directive('directiveBlah', function(){
    return {
        restrict: 'AE',
        scope: {},
        template: "<img src='https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg'/>",
        link: function(scope, element, attribute){
            element.on('hover', function(){
                element.css('{opacity: 50%}')
            })
        }
    }
})