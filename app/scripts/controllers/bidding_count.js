'use strict';

angular.module('card1App')
    .controller('BiddingCountCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_bidding_list = function () {
            $location.path('bidding_list');
        };

        var bidList = JSON.parse(localStorage.getItem('bidList'));
        var bidInformation = bidList[0].bidInformation;
        var information = _.sortBy(bidInformation, function (num) {
            return num.bidPrice
        });
//        var price = _.groupBy(information,function(num){return num.bidPrice});
        var priceCount = [];
        var n = 1;
        for (var i = 0; i < information.length; i++) {
            if (i == information.length - 1) {
                if (information[i].bidPrice == information[i - 1].bidPrice) {
                    priceCount.push({'bidPrice': information[i].bidPrice, 'count': n});
                    break;
                }
                else {
                    priceCount.push({'bidPrice': information[i].bidPrice, 'count': n});
                }
            }
            else {
                if (information[i].bidPrice == information[i + 1].bidPrice) {
                    n = n + 1;
                }
                else {
                    priceCount.push({'bidPrice': information[i].bidPrice, 'count': n});
                    n = 1;
                }
            }
        }
        $scope.priceCount = priceCount;

    });