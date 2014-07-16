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
        var bidList = JSON.parse(localStorage.getItem('bidList'));
        var bidInformation = bidList[0].bidInformation;
        var priceCount = JSON.parse(localStorage.getItem('priceCount'));
        var sucess = JSON.parse(localStorage.getItem('sucess'));
        $scope.priceCount = priceCount;
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.bidResult = "竞价结果：";
                $scope.phone = "电话：";
                $scope.price = "竞价：￥";
                $scope.sucessName = sucess.name;
                $scope.sucessPhone = sucess.phone;
                $scope.sucessPrice = sucess.price;
            });
        },3000);
        $scope.bidName = bidList[0].name;
        if(bidInformation.length){
            $scope.bidCount = bidInformation.length;
        }
        else{
            $scope.bidCount = 0;
        }

    });