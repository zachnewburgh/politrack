function PoliticiansController(PoliticianService, $location, $state, StateService) {
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

  ctrl.visitState = function(politician) {
    var state = politician.homestate;
    ctrl.stateId = ''

    StateService.getStates()
      .then(function(response) {
        var statesArray = response.data;
        
        statesArray.forEach(function(object) {
          if (object.name === state) {
            ctrl.stateId = object.id;
          }
        });
        
        if (ctrl.stateId === parseInt(ctrl.stateId, 10)) {
          $location.path('state/' + ctrl.stateId);
        } else {
          alert("Not a state!");
          $location.path('politicians');
        };
      });
  };

};

angular
  .module('app')
  .controller('PoliticiansController', PoliticiansController);