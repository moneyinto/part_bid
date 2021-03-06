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
            localStorage.removeItem('success');
            $location.path('bidding_list');
        };

        var bidList = getData('bidList');
        var bidInformation = bidList[0].bidInformation || [];
        var priceCount = getData('priceCount');
        var success = JSON.parse(localStorage.success);

        if (success) {
            $scope.bidResult = "竞价结果：" + success.name + "电话：" + success.phone + "竞价：￥" + success.price;
        }

        $scope.priceCount = priceCount;
        $scope.bidName = bidList[0].name;
        $scope.bidCount = bidInformation.length;
    });