function ViewPoliticianController(Politician, $stateParams) {
  var ctrl = this;
  ctrl.politician = Politician.get({id: $stateParams.id});
}

angular
  .module('app')
  .controller('ViewPoliticianController', ViewPoliticianController);