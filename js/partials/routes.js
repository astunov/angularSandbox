// ROUTES
myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'postController'
  })

  .when('/user/:userId', {
    templateUrl: 'pages/user.html',
    controller: 'userController'
  })

  .when('/album/:albumId', {
    templateUrl: 'pages/album.html',
  })

});