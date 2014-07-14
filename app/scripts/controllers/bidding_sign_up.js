'use strict';

angular.module('card1App')
    .controller('BiddingSignUpCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var bidList = JSON.parse(localStorage.getItem('bidList'));
        $scope.back_to_bidding_list = function(){
            $location.path('bidding_list');
        };
        $scope.end = function(){
            if(confirm("确定要结束本次竞价？")){
                bidList[0].colorStatus = 1;
                localStorage.setItem('bidList',JSON.stringify(bidList));
            }
        };
        var bidInformation = bidList[0].bidIformation || [];
        $scope.bidName = bidList[0].name;
        if(bidInformation){
            $scope.bidCount = bidInformation.length;
        }
        else{
            $scope.bidCount = 0;
        }
    });