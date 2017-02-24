angular.module('app').directive('dir', function(){
    return {
        restrict: 'AE',
        templateUrl: 'dir.html',
        scope: {},
        link: function(scope, element, attributes) {
            scope.alertMe = function() {
                alert('well done!')
            }
        }
    }
})