angular
  .module('app', ['ui.router', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'home/new.html',
        controller: 'PoliticiansController as ctrl'
      });
      .state('home.politicians', {
        url: 'politicians',
        templateUrl: 'home/politicians.html',
        controller: 'PoliticiansController as ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });