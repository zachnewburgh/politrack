function PoliticiansController(Politician, $location, $state) {
  var ctrl = this;
  ctrl.politicians = Politician.query();

  ctrl.upvotePolitician = function(politician) {
    ctrl.politician.popularity = ctrl.politician.popularity + 1;
  }

  ctrl.deletePolitician = function(politician) {
    politician.$delete(function() {
      $state.reload();
    });
  };
};

angular
  .module('app')
  .controller('PoliticiansController', PoliticiansController);