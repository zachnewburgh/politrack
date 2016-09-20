function PoliticianService($http) {

  this.getPoliticians = function() {
    return $http.get('http://localhost:3000/api/v1/politicians');
  };

  this.getPolitician = function(id) {
    return $http.get('http://localhost:3000/api/v1/politicians/' + id);
  };

  this.createPolitician= function(id) {
    return $http.post('http://localhost:3000/api/v1/politicians/' + id);
  };

  this.updatePolitician= function(id) {
    return $http.post('http://localhost:3000/api/v1/politicians/' + id);
  };

  this.deletePolitician= function(id) {
    return $http.delete('http://localhost:3000/api/v1/politicians/' + id);
  };
}

angular
  .module('app')
  .service('PoliticianService', PoliticianService);