function PoliticiansController(PoliticianService, $location, $state) {
  var ctrl = this;

  PoliticianService.getPoliticians()
    .then(function(response) {
      ctrl.politicians = response.data;
    });

  ctrl.upvotePolitician = function(politician) {
    politician.popularity = politician.popularity + 1;
  
    var data = {popularity: politician.popularity};
    PoliticianService.updatePolitician(politician.id, data);
  };

  ctrl.deletePolitician = function(politician) {
    PoliticianService.deletePolitician(politician.id);
    $state.reload();
  };

};

angular
  .module('app')
  .controller('PoliticiansController', PoliticiansController);