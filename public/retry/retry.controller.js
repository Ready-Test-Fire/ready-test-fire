(function() {
    angular.module('app')
        .controller('retryController', retryController)

    function retryController($state, $stateParams) {
        const vm = this
        vm.level = $stateParams.questionid

        vm.goToLevel = function() {
            console.log('going to level', $stateParams.questionid)
            $state.go('game', {questionid: Number($stateParams.questionid)})
        }
    }
})()