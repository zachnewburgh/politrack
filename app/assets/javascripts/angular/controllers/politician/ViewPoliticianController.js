function ViewPoliticianController(PoliticianService, $stateParams, $state) {
  var ctrl = this;

  PoliticianService.getPolitician($stateParams.id)
    .then(function(response) {
      ctrl.politician = response.data;
    });

  ctrl.editPolitician = function() {
    var data = {homestate: this.politician.homestate};
    PoliticianService.updatePolitician(ctrl.politician.id, data);
    $state.reload();
  };

}

angular
  .module('app')
  .controller('ViewPoliticianController', ViewPoliticianController);