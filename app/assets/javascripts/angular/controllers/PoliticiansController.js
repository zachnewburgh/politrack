function PoliticiansController(Politician) {
  var ctrl = this;
  ctrl.politicians = Politician.query();
}

angular
  .module('app')
  .controller('PoliticiansController', PoliticiansController);