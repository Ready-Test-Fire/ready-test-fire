/**
 * Created by georgeflauta on 6/7/17.
 */
(function() {
    angular.module('app')
        .controller('promptController', promptController)

    function promptController($stateParams) {
        const vm = this

        console.log('prompt controller is working')

        vm.isSet = function(id) {
            console.log('params id', typeof $stateParams.questionid)
            console.log('id', typeof id)

            return id === Number($stateParams.questionid)
        }
    }

})()