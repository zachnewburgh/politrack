function PoliticiansController() {
  var ctrl = this;

  ctrl.politicians = [
    {
      name: 'Barack Obama',
      bio: '44th U.S. President'
    },
    {
      name: 'Hillary Clinton',
      bio: '67th U.S. Secretary of State'
    }
  ];
}

angular
  .module('app')
  .controller('PoliticiansController', PoliticiansController);