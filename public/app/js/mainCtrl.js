angular.module('vexen').controller('mainCtrl', function($scope, mainService){

$scope.mobileMenu = false;

$scope.test = 'working'

$scope.standardIf = true;

$scope.launchIf = false;

$scope.companyIf = false;

$scope.reserveIf = false;

$scope.carouselData = () => {
  mainService.carouselData().then( (response) => {
    // console.log(response)
    $scope.carouselImages = response;
  })
}

$scope.carouselData();

})
