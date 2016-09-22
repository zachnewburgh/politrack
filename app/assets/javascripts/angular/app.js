angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.main', {
        url: 'main',
        templateUrl: 'home/main.html',
        controller: 'MainController as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'home/politician/new.html',
        controller: 'NewPoliticianController as ctrl'
      })
      .state('home.politicians', {
        url: 'politicians',
        templateUrl: 'home/politician/politicians.html',
        controller: 'PoliticiansController as ctrl'
      })
      .state('home.politician', {
        url: 'politician/:id',
        templateUrl: 'home/politician/show.html',
        controller: 'ViewPoliticianController as ctrl'
      })
      .state('home.edit', {
        url: 'edit/:id',
        templateUrl: 'home/politician/edit.html',
        controller: 'EditPoliticianController as ctrl'
      })
      .state('home.state', {
        url: 'state/:id',
        templateUrl: 'home/state/show.html',
        controller: 'ViewStateController as ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });