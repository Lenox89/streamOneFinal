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
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  $scope.plusSlides=function(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  $scope.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    var dots = $(".demo");
    var captionText = $("#caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
});

app.controller('musicController',function($scope){
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  $scope.plusSlides=function(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  $scope.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    var dots = $(".demo");
    var captionText = $("#caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    slides.each(function(i){
      console.log(slides[i].children[1].load())
    })
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  // +++++++++++++++++++++++
  var player = $('#player');

  var audios = [{src:'media/audio/Alone Together.mp3',
                 title:'Alone Together'},
                {src:'media/audio/Centuries - Fall Out Boy.mp3',
                 title:'Centuries'},
                {src:'media/audio/Dance, Dance.mp3',
                 title:'Dance, Dance'},
                {src:'media/audio/Immortals.mp3',
                 title:'Immortals'},
                 {src:'media/audio/Irresistible.mp3',
                 title:'Irresistible'},
                {src:'media/audio/This Ain\'t A Scene, It\'s An Arms Race.mp3',
                 title:'This Ain\'t A Scene, It\'s An Arms Race.mp3'}]


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