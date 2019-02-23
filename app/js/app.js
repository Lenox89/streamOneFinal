var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{ 
    templateUrl:'app/template/home.html',
    controller: 'homeController'
  });
});

app.controller('homeController',function($scope){

  var player = $('#player');

  var audios = [{src:'media/audio/SampleAudio_0.4mb.mp3',
                 title:'Sample 1'},
                {src:'media/audio/SampleAudio_0.7mb.mp3',
                 title:'Sample 2'}]


  for (var i = 0; i <= audios.length - 1; i++) {
    player.append('<li class="list-group-item">'+audios[i].title+'<br/><audio src="'+audios[i].src+'" controls></audio></li>');
  }

  $('audio').each(function(index,el){
    el.addEventListener('play', function() { 
      $('audio').each(function(index,ol){
        $(ol).parent().addClass('active');
        if(el != ol){
          ol.load(); 
          $(ol).parent().removeClass('active');
        }
      });
    }, true);
    el.addEventListener('ended', function() { 
      $('audio').each(function(index,ol){
        $(ol).parent().removeClass('active');
      });
    }, true);
  })
});

app.controller('navController',function($scope){
  $scope.links =[{url:'/link1',
                  title:'Link 1'},
                 {url:'/link2',
                  title:'Link 2'},
                 {url:'/link3',
                  title:'Link 3'},
                 {url:'/link4',
                  title:'Link 4'}]
});