function PoliticiansController(PoliticianService, $location, $state) {
  var ctrl = this;

  PoliticianService.getPoliticians()
    .then(function(response) {
      ctrl.politicians = response.data;
    });

  ctrl.upvotePolitician = function(politician) {
    politician.popularity = politician.popularity + 1;
    politician.$update(function() {
      
    });
  };

  ctrl.deletePolitician = function(politician) {
    politician.$delete(function() {
      $state.reload();
    });
  };
};

angular
  .module('app')
  .controller('PoliticiansController', PoliticiansController);