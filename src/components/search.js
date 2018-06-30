angular.module('video-player')

.component('search', {
  bindings: { 
    searchInput: '<',
    onClick: '<', 
  },
  templateUrl: 'src/templates/search.html'

});
