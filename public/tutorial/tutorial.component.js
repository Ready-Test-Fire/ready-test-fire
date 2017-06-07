/**
 * Created by georgeflauta on 6/4/17.
 */

(function() {
    angular.module('app')
        .component('tutorial', {
            controller: function() {
                console.log('tutorial controller is working')
            },
            templateUrl: '/tutorial/tutorial.html'
        })
})()