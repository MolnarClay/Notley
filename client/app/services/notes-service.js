angular.module('notely')
  .service('NotesService', NotesService);

NotesService.$inject = ['$http'];

function NotesService($http) {
  var self = this;
  self.notes = [];

  self.fetch = function(callback) {
    $http.get('http://localhost:3000/notes')
      .success(function(notesData) {
        //  console.log(notesData)
        //  debuggerBb;

        if (callback) {
          callback();
        }
      });
  };

  self.get = function() {
    return self
  };

}
