angular.module('vexen').controller('mainCtrl', function($scope, mainService){

$scope.test = 'working'

$scope.carouselData = () => {
  mainService.carouselData().then( (response) => {
    // console.log(response)
    $scope.carouselImages = response;
  })
}

$scope.carouselData();

})
