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
});
'use strict';

angular.module('vexen').service('mainService', function ($http) {});
//# sourceMappingURL=bundle.js.map
