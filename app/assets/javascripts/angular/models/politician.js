function Politician($resource) {
  var Politician = $resource('http://localhost:3000/api/v1/politicians/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
};

angular
  .module('app')
  .factory('Politician', Politician);