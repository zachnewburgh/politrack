function StateService($http) {

  this.getStates = function() {
    return $http.get('http://localhost:3000/api/v1/states');
  };

  this.getState= function(id) {
    return $http.get('http://localhost:3000/api/v1/states/' + id);
  };

  this.createState = function(data) {
    $http.post('http://localhost:3000/api/v1/states', data);
  };

  this.updateState = function(id, data) {
    $http.put('http://localhost:3000/api/v1/states/' + id, data);
  };

  this.deleteState = function(id) {
    return $http.delete('http://localhost:3000/api/v1/states/' + id);
  };
}

angular
  .module('app')
  .service('StateService', StateService);