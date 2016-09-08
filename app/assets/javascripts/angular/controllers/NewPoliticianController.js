function NewPoliticianController(Politician, $location) {
  var ctrl = this;
  ctrl.politician = new Politician();

  ctrl.addPolitician = function() {
    ctrl.politician.$save(function() {
      $location.path('politicians');
    });
  };
};

angular
  .module('app')
  .controller('NewPoliticianController', NewPoliticianController);