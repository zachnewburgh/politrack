function PoliticiansController(Politician, $location, $state) {
  var ctrl = this;
  ctrl.politicians = Politician.query();

  ctrl.deletePolitician = function(politician) {
    politician.$delete(function() {
      $state.go($state.current, {}, {reload: true});
    });
  };
};

angular
  .module('app')
  .controller('PoliticiansController', PoliticiansController);