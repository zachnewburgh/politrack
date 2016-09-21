function ViewStateController(StateService, $stateParams, PoliticianService) {
  var ctrl = this;

  StateService.getState($stateParams.id)
    .then(function(response) {
      ctrl.state = response.data
    });

  PoliticianService.getPoliticians()
    .then(function(response) {
      ctrl.politicians = response.data
    });
}

angular
  .module('app')
  .controller('ViewStateController', ViewStateController);