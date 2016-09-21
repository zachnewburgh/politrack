function ViewStateController(StateService, $stateParams) {
  var ctrl = this;

  StateService.getState($stateParams.id)
    .then(function(response) {
      ctrl.state = response.data
    })
}

angular
  .module('app')
  .controller('ViewStateController', ViewStateController);