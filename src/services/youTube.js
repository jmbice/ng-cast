angular.module('video-player')
  .service('youTube', function($http){
    // TODO
    this.search = (data, callBack) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: data,
      }).then(function(resultData){
        callBack(resultData.data.items);
        //success function, manipulate data
      }, function(){
        console.log('You knew this wouldn\'t work');
        //error function, do something
      });
    }
});
