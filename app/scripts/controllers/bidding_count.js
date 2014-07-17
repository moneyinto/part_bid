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

        var bidList = getData('bidList')
        var bidInformation = bidList[0].bidInformation;

        var priceCount = getData('priceCount');
        var sucess = getData('sucess');

        $scope.priceCount = priceCount;
        $scope.bidResult = "竞价结果：";
        $scope.phone = "电话：";
        $scope.price = "竞价：￥";
        $scope.sucessName = sucess.name;
        $scope.sucessPhone = sucess.phone;
        $scope.sucessPrice = sucess.price;


        $scope.bidName = bidList[0].name;
        if (bidInformation) {
            $scope.bidCount = bidInformation.length;
            $scope.a = "#/bidding_count";
        }
        else {
            $scope.a = "";
            $scope.bidCount = 0;
        }


    });