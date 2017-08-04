'use strict';

angular.module('vexen', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  }), $stateProvider.state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  }), $stateProvider.state('car', {
    url: '/car',
    templateUrl: './views/car.html'
  });

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('vexen').controller('carCtrl', function ($scope, mainService) {

  $scope.carIf = true;
  $scope.cnvIf = false;
  $scope.reserveIf = false;
});
'use strict';

angular.module('vexen').controller('mainCtrl', function ($scope, mainService) {

  $scope.mobileMenu = false;

  $scope.test = 'working';

  $scope.contactIf = false;

  $scope.smIf = false;

  $scope.companyIf = true;

  $scope.carIf = true;
  $scope.cnvIf = false;
  $scope.reserveIf = false;

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
'use strict';

$('.scroll').mousedown(function () {
    timeout = setInterval(function () {
        window.scrollBy(0, -1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});

$(document).mouseup(function () {
    clearInterval(5);
    return false;
});
'use strict';

angular.module('vexen').controller('scrollCtrl', function ($scope, $location, $anchorScroll) {

    $scope.gotoBottom = function () {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('bottom');

        // call $anchorScroll()
        $anchorScroll();
    };
});
//# sourceMappingURL=bundle.js.map
