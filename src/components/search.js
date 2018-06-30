angular.module('video-player')
  .component('search', {
    bindings: { 
      searchInput: '<',
      result: '<', 
    },
    templateUrl: 'src/templates/search.html'

  });
