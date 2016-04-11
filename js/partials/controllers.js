// Posts list on main page
myApp.controller('postController', function ($scope, $filter, appDataService) {

  $scope.posts = appDataService.GetPosts();

  // Не смог добиться адекватного решения с привязкой имени к id. C одной стороны неплохо было бы сделать через $filter,
  // с другой для каждого фильтровать — это жестоко. Разумнее подключить ко всем объектами их имена сразу, но насколько
  // это нужно для подобной задачи? Мое решение через классический arr.filter(callback[, thisArg])» себя не оправдало.
  // $scope.users = appDataService.GetUsers();

});

// User page
myApp.controller('userController', function ($scope, $routeParams, appDataService) {

  // get current userId from hash
  $scope.userId = $routeParams.userId || '1';

  $scope.user = appDataService.GetUsers($scope.userId);

  $scope.albumList = appDataService.GetAlbums($scope.userId);

  $scope.posts = appDataService.GetPosts($scope.userId);

});

// Gallery popup
myApp.controller('GalleryCtrl', function ($scope, $routeParams, Lightbox, appDataService) {

  // get current albumId from hash
  $scope.albumId = $routeParams.userId || '1';

  $scope.photos = appDataService.GetPhotos($scope.albumId);

  // activate popup
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.photos, index);
  };
});

// Modal
myApp.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'directives/modal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});


// Возникли сложности с закрытием попапа, поэтому ограничился алертом

// myApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $uibModal, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $uibModalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });

myApp.controller('formController', function($scope) {

  $scope.submitForm = function() {

    if ($scope.userForm.$valid) {
                  alert('validate');
              } else {
                 alert('not validate');
              }
      };
});