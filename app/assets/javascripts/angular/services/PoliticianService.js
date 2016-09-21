function PoliticianService($http) {

  this.getPoliticians = function() {
    return $http.get('http://localhost:3000/api/v1/politicians');
  };

  this.getPolitician = function(id) {
    return $http.get('http://localhost:3000/api/v1/politicians/' + id);
  };

  this.createPolitician = function(data) {
    $http.post('http://localhost:3000/api/v1/politicians', data);
  };

  this.updatePolitician = function(id, data) {
    $http.put('http://localhost:3000/api/v1/politicians/' + id, data);
  };

  this.deletePolitician = function(id) {
    return $http.delete('http://localhost:3000/api/v1/politicians/' + id);
  };
}

angular
  .module('app')
  .service('PoliticianService', PoliticianService);