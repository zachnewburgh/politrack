function ViewPoliticianController(PoliticianService, $stateParams) {
  var ctrl = this;

  PoliticianService.getPolitician($stateParams.id)
    .then(function(response) {
      ctrl.politician = response.data
    })
}

angular
  .module('app')
  .controller('ViewPoliticianController', ViewPoliticianController);