'use strict';

angular.module('card1App')
    .controller('BiddingListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.status = 1;
        var activities = getData('activities');
        var activityName = getData('activityName');
        var bidList = getData('bidList');
        var evens = _.filter(bidList, function(activity){ return  activity.activityName == activityName });
        var even = _.find(bidList,function(num){ return num.colorStatus == 0});
        if(even){
            $scope.colorStatus = 0;
        }
        else{
            $scope.colorStatus = 1;
        }
        for (var i = 0;i < activities.length;i++){
            if(activities[i].status == 0){
                $scope.status = 0;
            }
        }
        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };
        $scope.go_to_bidding_sign_up = function(bid){
            setData('bidName',bid.name);
        };
        $scope.start = function(){
            var bid = evens.length + 1;
            setData('bidName',bid);
            var list = {'name': bid,'colorStatus':0,'activityName':activityName};
            bidList.unshift(list);
            setData('bidList',bidList);
            $location.path('/bidding_sign_up');
        };

        $scope.evens = evens;


    });