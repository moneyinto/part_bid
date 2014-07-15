'use strict';

angular.module('card1App')
    .controller('BiddingResultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_bidding_list = function() {
            $location.path('bidding_list');
        };
        var activities = JSON.parse(localStorage.getItem('activities'));
        var activityName = JSON.parse(localStorage.getItem('activityName'));
        var bidList = JSON.parse(localStorage.getItem('bidList'));
        var bidInformation = bidList[0].bidInformation;
        var information = _.sortBy(bidInformation,function(num){return num.bidPrice});
        var even = _.find(activities,function(num){return num.name == activityName});
        var peopleList = even.peopleList;
        var people_list = [];
        for (var i = 0;i < information.length;i++){
            var list = _.find(peopleList,function(num){return num.personPhone == information[i].bidPhone});
            people_list.push({'name':list.personName,'phone':list.personPhone,'price':information[i].bidPrice});

        }
        console.log(people_list[0].name);
        $scope.peopleList = people_list;
    });
