/**
 * Created by claytonmolnar on 11/9/15.
 */(function() {
    angular.module('notely.notes', [
        'ui.router'
    ])
        .config(notesConfig);

    notesConfig['$inject'] = ['$stateProvider'];
    function notesConfig($stateProvider) {
        $stateProvider

            .state('notes', {
                url: '/notes',
                templateUrl: '/notes/notes.html',
                controller: NotesController
            })

            .state('notes.form' ,{
                url:'/:noteId',
                templateUrl: '/notes/notes-form.html'

            });
    }

    NotesController['$inject'] = [ '$state','$scope','NotesService'];
    function NotesController( $state, $scope, NotesService) {
      NotesService.fetch(function(notesData){
        $scope.notes = notesData;
      });

      $state.go('notes.form');
    }
})();
