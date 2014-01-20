
var StudyHallModule = angular.module('StudyHallApp', []);

$('.dropdown-menu').find('form').click(function (e) {
  e.stopPropagation();
});
