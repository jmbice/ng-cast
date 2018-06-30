angular.module('video-player')
  .component('app', {
    controller: function($scope, youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.searchInput = '';
      var setVideos = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      }
      var data = {
        'key': YOUTUBE_API_KEY,
        'type': 'video',
        'maxResults': '5',
        'part': 'snippet',
        'q': 'hello',
        'videoEmbeddable': 'true'
      };
      youTube.search(data, setVideos); //initial call for data on load
      this.searchResults = (searchQuery) => {
        var data = {
          'key': YOUTUBE_API_KEY,
          'type': 'video',
          'maxResults': '5',
          'part': 'snippet',
          'q': searchQuery,
          'videoEmbeddable': 'true'
        };
        youTube.search(data, setVideos); //????
      }    

      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
    },
    // TODO
    templateUrl: 'src/templates/app.html'
});
