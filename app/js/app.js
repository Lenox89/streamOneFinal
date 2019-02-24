var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{ 
    templateUrl:'app/template/home.html',
    controller: 'homeController'
  })
  .when('/music',{ 
    templateUrl:'app/template/music.html',
    controller: 'musicController'
  })
  .when('/news',{ 
    templateUrl:'app/template/news.html',
    controller: 'newsController'
  })
  .when('/tour',{ 
    templateUrl:'app/template/tour.html',
    controller: 'tourController'
  })
  .when('/signup',{ 
    templateUrl:'app/template/signup.html',
    controller: 'signupController'
  });
});

app.controller('navController',function($scope){
  $scope.links =[{url:'/music',
                  title:'Music'},
                 {url:'/news',
                  title:'News'},
                 {url:'/tour',
                  title:'Tour'},
                 {url:'/signup',
                  title:'Sign Up'}]
});

app.controller('homeController',function($scope){
});

app.controller('musicController',function($scope){

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

app.controller('newsController',function($scope){
});

app.controller('tourController',function($scope){
});

app.controller('signupController',function($scope){
  $('#signup-form').submit(function(event){
    event.preventDefault();
    $('#signup-form').slideUp(function(){
      $('#form-thankyou').slideDown();
    });
  })
});