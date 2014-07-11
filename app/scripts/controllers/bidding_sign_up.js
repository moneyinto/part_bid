'use strict';

angular.module('card1App')
    .controller('BiddingSignUpCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_bidding_list = function(){
            $location.path('bidding_list');
        };
        $scope.check = 1;
        $scope.start = function(){
          $scope.check = 0;
        };
        $scope.end = function(){
          $scope.check = 1;
        };



    });