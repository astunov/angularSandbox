//SERVICE
myApp.service('appDataService', ['$resource', function($resource) {

  this.GetPosts = function(userId) {
    var postList;
    if (userId !== undefined) {
        postList = $resource('http://jsonplaceholder.typicode.com/posts/?userId=:userId', {userId: userId});
    } else {
       postList = $resource('http://jsonplaceholder.typicode.com/posts/?_start=0&_end=50', {});
    }

   return postList.query();
  };

  this.GetAlbums = function (userId) {

    var albumList = $resource('http://jsonplaceholder.typicode.com/albums/?userId=:userId', {userId: userId});

    return albumList.query();
  };

  this.GetUsers = function(userId) {
    var userInfo;
    if (userId !== undefined) {
      userInfo = $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId: userId});
      return userInfo.get();
    } else {
      userInfo = $resource('http://jsonplaceholder.typicode.com/users/', {});
      return userInfo.query();
    }

  };

  this.GetPhotos = function (albumId) {

    var photos = $resource('http://jsonplaceholder.typicode.com/photos/?albumId=:albumId', {albumId: albumId});

    return photos.query();
  };

}]);




