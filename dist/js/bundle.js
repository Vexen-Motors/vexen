'use strict';

angular.module('vexen', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  });

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('vexen').controller('mainCtrl', function ($scope, mainService) {

  $scope.test = 'working';

  $scope.carouselData = function () {
    mainService.carouselData().then(function (response) {
      // console.log(response)
      $scope.carouselImages = response;
    });
  };

  $scope.carouselData();
});
'use strict';

angular.module('vexen').service('mainService', function ($http) {

  this.carouselData = function () {
    return $http.get('./carousel-photos.json').then(function (response) {
      // console.log(response.data)
      return response.data;
    });
  };

  this.carouselData();
});
//# sourceMappingURL=bundle.js.map
