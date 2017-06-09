/**
 * Created by georgeflauta on 6/4/17.
 */
(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$routeProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider){

        $locationProvider.html5Mode(true)

        $stateProvider
            .state('intro', {
                url: '/',
                component: 'signedOutFrame',
            })
            .state('game', {
                url: '/start/:questionid',
                component: 'signedInFrame'
            })
            .state('retry', {
                url: '/retry/:questionid',
                component: 'retryFrame'
            })
        // etc...
    }
}());