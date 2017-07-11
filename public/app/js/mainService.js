angular.module('vexen').service('mainService', function($http){

  this.carouselData = () => {
    return $http.get('./carousel-photos.json').then( (response) => {
      // console.log(response.data)
      return response.data;
    })
  }

  this.carouselData();

})
