'use strict';

/**
 * @ngdoc function
 * @name card1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the card1App
 */
angular.module('card1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
