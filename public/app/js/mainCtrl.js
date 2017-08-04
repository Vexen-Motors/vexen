angular.module('vexen').controller('mainCtrl', function($scope, mainService){

$scope.mobileMenu = false;

$scope.test = 'working'

$scope.contactIf = false;

$scope.smIf = false;

$scope.companyIf = true;

$scope.carIf = true;
$scope.cnvIf = false;
$scope.reserveIf = false;

$scope.carouselData = () => {
  mainService.carouselData().then( (response) => {
    // console.log(response)
    $scope.carouselImages = response;
  })
}

$scope.carouselData();

})
