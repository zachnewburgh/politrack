function EditPoliticianController($location, $stateParams, PoliticianService) {
  var ctrl = this;
  ctrl.politician = PoliticianService.getPolitician($stateParams.id)
    .then(function(response) {
      ctrl.politician = response.data
    });

  ctrl.editPolitician = function() {
    var data = {name: this.politician.name, position: this.politician.position, homestate: this.politician.homestate}
    PoliticianService.updatePolitician(ctrl.politician.id, data);
    $location.path('politicians')
  };

};

angular
  .module('app')
  .controller('EditPoliticianController', EditPoliticianController);