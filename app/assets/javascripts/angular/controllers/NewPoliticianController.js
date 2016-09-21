function NewPoliticianController($location, PoliticianService) {
  var ctrl = this;

  ctrl.addPolitician = function() {
    var data = {name: this.politician.name, position: this.politician.position, homestate: this.politician.homestate};
    PoliticianService.createPolitician(data);
    $location.path('politicians');
  };
  
};

angular
  .module('app')
  .controller('NewPoliticianController', NewPoliticianController);