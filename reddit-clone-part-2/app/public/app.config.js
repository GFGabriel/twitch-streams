(function() {
  'use strict';

  angular.module('reddit').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state('list', {
        url: '/',
        component: 'showPosts'
      })
      .state('addPost', {
        url: '/new',
        component: 'addPost'
      })
      .state('editPost', {
        url: '/posts/:id/edit',
        component: 'editPost'
      })
      // etc...
  }
}());
