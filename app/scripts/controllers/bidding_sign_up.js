'use strict';

angular.module('card1App')
    .controller('BiddingSignUpCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var bidList = getData('bidList');
        var activities = getData('activities');
        var activityName = getData('activityName');
        var bid_name = getData('bidName');
        $scope.colorStatus = _.find(bidList,function(num){ return num.name == bid_name && num.activityName == activityName}).colorStatus;
        $scope.back_to_bidding_list = function(){
            $location.path('bidding_list');
        };
        $scope.end = function(){
            var bidList = getData('bidList');
            if(confirm("确定要结束本次竞价？")){
                bidList[0].colorStatus = 1;
                localStorage.removeItem('bidName');
                setData('bidList',bidList);
                $location.path('bidding_result');
            }
        };
        $scope.fresh = function () {
            var bidList = getData('bidList');
            var activities = getData('activities');
            var activityName = getData('activityName');
            var bid_name = getData('bidName');
            var bid_list = _.find(bidList,function(num){ return num.name == bid_name && num.activityName == activityName});
            var bidInformation = bid_list.bidInformation || [];
            $scope.bidName = bid_list.name;
            if(bidInformation){
                $scope.bidCount = bidInformation.length;
            }
            else{
                $scope.bidCount = 0;
            }
            var even = _.find(activities, function(activity){ return activity.name == activityName; });
            var peopleList = even.peopleList;
            var bidPeople = [];
            for (var i = 0;i < bidInformation.length;i++){
                var bidPhone = bidInformation[i].bidPhone;
                var personInformation = _.find(peopleList, function(num){ return num.personPhone == bidPhone; });
                bidPeople.push(personInformation);
            }
            $scope.bidPeople = bidPeople;
        };
        $scope.fresh();


    });