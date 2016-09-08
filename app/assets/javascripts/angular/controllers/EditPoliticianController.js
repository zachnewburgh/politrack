function EditPoliticianController(Politician, $location, $stateParams) {
  var ctrl = this;
  ctrl.politician = Politician.get({id: $stateParams.id});

  ctrl.editPolitician = function() {
    ctrl.politician.$update(function() {
      $location.path('politicians');
    });
  };
};

angular
  .module('app')
  .controller('EditPoliticianController', EditPoliticianController);