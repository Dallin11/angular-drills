angular.module('app').directive('dir', function(){
    return {
        restrict: 'AE',
        link: function(scope, element, attribute) {
            element.on('focus', function(){
                element.css('background', 'yellow');
            })
            element.on('focusout', function(){
                element.css('background', 'none')
            })
        }
    }
})