(function() {
  angular.module('notely.notes', [
      'ui.router'
    ])
    .config(notesConfig);

  notesConfig['$inject'] = ['$stateProvider'];

  function notesConfig($stateProvider) {
    $stateProvider

      .state('notes', {
      url: '/notes',
      resolve: {
        notesLoaded: function(NotesService) {
          return NotesService.fetch();
        }
      },
      templateUrl: '/notes/notes.html',
      controller: NotesController
    })

    .state('notes.form', {
      url: '/:noteId',
      templateUrl: '/notes/notes-form.html',
      controller: NotesFormController
    });
  }

  NotesController.$inject = ['$state', '$scope', 'NotesService'];

  function NotesController($state, $scope, NotesService) {
    $scope.note = {};
    $scope.notes = NotesService.get();
  }

  NotesFormController.$inject = ['$scope', '$state', 'NotesService'];

  function NotesFormController($scope, $state, NotesService) {
    $scope.note = NotesService.findById($state.params.noteId);


    $scope.save = function() {
      if ($scope.note._id) {

        console.log('update');
        NotesService.update($scope.note);
        console.log($scope.note._id);
      } else {
        console.log('create');
        NotesService.create($scope.note);


      }

    }
  };(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
  .config(notesConfig);

  notesConfig['$inject'] = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider

      .state('notes', {
        url: '/notes',
        resolve: {
          notesLoaded: ['NotesService', function(NotesService) {
            return NotesService.fetch();
          }]
        },
        templateUrl: '/notes/notes.html',
        controller: NotesController
      })

      .state('notes.form', {
        url: '/:noteId',
        templateUrl: '/notes/notes-form.html',
        controller: NotesFormController
      });
  }

  NotesController.$inject = ['$state', '$scope', 'NotesService'];
  function NotesController($state, $scope, NotesService) {
    $scope.note = {};
    $scope.notes = NotesService.get();
  }

  NotesFormController.$inject = ['$scope', '$state', 'NotesService'];
  function NotesFormController($scope, $state, NotesService) {
    $scope.note = NotesService.findById($state.params.noteId);

    $scope.delete = function() {
      NotesService.delete($scope.note);
    };
    $scope.save = function() {
      // Decide whether to call create or update...
      if ($scope.note._id) {
        NotesService.update($scope.note);
      }
      else {
        NotesService.create($scope.note).then(function(response) {
          $state.go('notes.form', { noteId: response.data.note._id });
        });
      }
    };
  }
})();











//

})();









//
