
var StudyHallModule = angular.module('StudyHallApp', []);

$('.dropdown-menu').find('form').click(function (e) {
  e.stopPropagation();
});
  
$('.btn').button()

var StudyHallModule = angular.module('StudyHallApp', []);

StudyHallModule.factory('StudyHallService', function(){
  var service = {
  }
  return service
})

StudyHallModule.controller("LoginController", function($scope, $http, StudyHallService){

});

StudyHallModule.controller("FilterController", function($scope, $http, StudyHallService){

});

StudyHallModule.controller("MapController", function($scope, $http, StudyHallService){
  $scope.map = L.map('map',
    {
      center: new L.LatLng(35.595, -82.552),
      zoom: 12
    }
  );

  var tileLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: 'Map data © OpenStreetMap contributors' }
  );

  $scope.map.addLayer(tileLayer);
});
