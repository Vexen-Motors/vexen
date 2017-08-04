angular.module('vexen', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    }),

    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html'
      }),

      $stateProvider
        .state('car', {
          url: '/car',
          templateUrl: './views/car.html'
        })


    $urlRouterProvider.otherwise('/')

})
