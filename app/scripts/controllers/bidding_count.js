'use strict';

angular.module('card1App')
    .controller('BiddingCountCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_bidding_list = function () {
            localStorage.removeItem('priceCount');
            localStorage.removeItem('sucess');
            $location.path('bidding_list');
        };
        var priceCount = JSON.parse(localStorage.getItem('priceCount'));
        var sucess = JSON.parse(localStorage.getItem('sucess'));
        $scope.priceCount = priceCount;
        $scope.sucessName = sucess.name;
        $scope.sucessPhone = sucess.phone;
        $scope.sucessPrice = sucess.price
    });