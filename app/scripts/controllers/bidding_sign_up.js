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
        $scope.colorStatus = Bidding.bidding_sign_up_end_status(bidList,bid_name,activityName);
        $scope.back_to_bidding_list = function(){
            $location.path('bidding_list');
        };
        $scope.end = function(){
            var bidList = getData('bidList');
            if(confirm("确定要结束本次竞价？")){
                Bidding.end_sucess(bidList);
                $location.path('bidding_result');
            }
        };
        $scope.fresh = function () {
            var bidList = getData('bidList');
            var activities = getData('activities');
            var activityName = getData('activityName');
            var bid_name = getData('bidName');
            var bid_list = Bidding.bidName_equal_activityName(bidList,activityName,bid_name);
            var bidInformation = bid_list.bidInformation || [];
            $scope.bidName = bid_list.name;
            if(bidInformation){
                $scope.bidCount = bidInformation.length;
            }
            if(!bidInformation){
                $scope.bidCount = 0;
            }
            var peopleList = Activity.activity_enqul_activityName(activities,activityName).peopleList;
            var bidPeople = [];
            Bidding.get_bidPrice(bidInformation,peopleList,bidPeople);
            $scope.bidPeople = bidPeople;
        };
        $scope.fresh();


    });