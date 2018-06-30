angular.module('video-player')
.service('youTube', function($http, searchQuery){
  // TODO

  $http({
    method: GET,
    url: '/youtube/v3/search',
    data: {
      'maxResults': '5',
      'part': 'snippet',
      'q': searchQuery,
      'type': 'video'
    }
  }).then(function(data){
    console.log(data)
    //success function, manipulate data
  }, function(){
    console.log('You knew this wouldn\'t work');
    //error function, do something
  });
});
