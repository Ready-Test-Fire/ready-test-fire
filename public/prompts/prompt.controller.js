/**
 * Created by georgeflauta on 6/7/17.
 */
(function() {
    angular.module('app')
        .controller('promptController', promptController)

    function promptController($stateParams) {
        const vm = this

        //console.log('prompt controller is working')

        vm.isSet = function(id) {


            return id === Number($stateParams.questionid)
        }
    }

})()
