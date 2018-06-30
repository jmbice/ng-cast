angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.searchInput = '';

    this.searchYouTube = (string) => {
      console.log(string);
      youTube($http, string); //????
    }    

    this.selectVideo = (index) => {
      this.currentVideo = exampleVideoData[index];
    };
  },
  // TODO
  templateUrl: 'src/templates/app.html'
});
