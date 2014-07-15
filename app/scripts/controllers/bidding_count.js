'use strict';

angular.module('card1App')
    .controller('BiddingCountCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_bidding_list = function() {
            $location.path('bidding_list');
        }

    });