function PoliticianService($http) {
  
  this.getPoliticians = function() {
    return $http.get('http://localhost:3000/api/v1/politicians');
  };

  this.getPolitician = function(politician) {
    return $http.get('http://localhost:3000/api/v1/politicians/' + politician.id);
  };

  this.createPolitician= function(politician) {
    return $http.post('http://localhost:3000/api/v1/politicians/' + politician.id);
  };

  this.updatePolitician= function(politician) {
    return $http.post('http://localhost:3000/api/v1/politicians/' + politician.id);
  };

  this.deletePolitician= function(politician) {
    return $http.delete('http://localhost:3000/api/v1/politicians/' + politician.id);
  };
}

angular
  .module('app')
  .service('UserService', UserService);