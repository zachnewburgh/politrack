angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
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
        controller: 'NewPoliticianController as ctrl'
      })
      .state('home.politicians', {
        url: 'politicians',
        templateUrl: 'home/politicians.html',
        controller: 'PoliticiansController as ctrl'
      })
      .state('home.politician', {
        url: 'politician/:id',
        templateUrl: 'home/show.html',
        controller: 'ViewPoliticianController as ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });