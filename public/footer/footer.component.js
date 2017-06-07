/**
 * Created by georgeflauta on 6/4/17.
 */

(function() {
    angular.module('app')
        .component('appFooter', {
            controller: function() {
                console.log('footer controller is working')
            },
            templateUrl: '/footer/footer.html'
        })
})()