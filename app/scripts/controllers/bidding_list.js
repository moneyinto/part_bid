'use strict';

angular.module('card1App')
    .controller('BiddingListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.status = 1;
        var activities = JSON.parse(localStorage.getItem('activities'));
        var activityName = JSON.parse(localStorage.getItem('activityName'));
        var bidList = JSON.parse(localStorage.getItem('bidList')) || [] ;
        var evens = _.filter(bidList, function(activity){ return  activity.activityName == activityName; });
        for (var i = 0;i < activities.length;i++){
            if(activities[i].status == 0){
                $scope.status = 0;
            }
        }
        if(evens.length){
            $scope.colorStatus = evens[0].colorStatus;
        }
        else{
            $scope.colorStatus = 1;
        }

        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };
        $scope.start = function(){
            console.log(evens);
            var bid = evens.length + 1;
            console.log(bid);
            bidList.unshift({'name': bid,'colorStatus':0,'activityName':activityName});
            localStorage.setItem('bidList',JSON.stringify(bidList));
            $location.path('/bidding_sign_up')
        };

        $scope.evens = evens;


    });