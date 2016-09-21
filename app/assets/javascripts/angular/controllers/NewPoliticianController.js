function NewPoliticianController($location, PoliticianService) {
  var ctrl = this;

  StateService.getStates()
    .then(function(response) {
      ctrl.states = response.data;
    });

  ctrl.addPolitician = function() {
    var data = {name: this.politician.name, position: this.politician.position, homestate: this.politician.homestate};
    PoliticianService.createPolitician(data);
    $location.path('politicians');
  };
  
};

angular
  .module('app')
  .controller('NewPoliticianController', NewPoliticianController);