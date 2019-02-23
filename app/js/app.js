var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{ 
    templateUrl:'app/template/home.html',
    controller: 'homeController'
  });
});

app.controller("homeController",function($scope){
  var player = $('#player');
  var audios = [{src:'media/audio/SampleAudio_0.4mb.mp3',
                 title:'Sample 1'},
                {src:'media/audio/SampleAudio_0.7mb.mp3',
                 title:'Sample 2'}]

  $scope.audios = audios;

  for (var i = 0; i <= audios.length - 1; i++) {
    player.append('<li>'+audios[i].title+'<br/><audio src="'+audios[i].src+'" controls></audio></li>');
  }

  $('audio').each(function(index,el){
    el.addEventListener("play", function() { 
      $('audio').each(function(index,ol){
        if(el != ol){
          ol.load(); 
        }
      });
    }, true);
  })
});