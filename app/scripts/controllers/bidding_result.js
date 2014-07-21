'use strict';

angular.module('card1App')
    .controller('BiddingResultCtrl', function ($scope, $location) {
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
        var activities = getData('activities');
        var activityName = getData('activityName');
        var bidList = getData('bidList');
        var bidInformation = bidList[0].bidInformation || [];
        var people_list = [];

        Bidding.bidPhone_equal_peoplePhone(bidInformation, activities, activityName, people_list);

        $scope.peopleList = people_list;

        setData('priceCount', Bidding.price_count_array(bidInformation));

        var success = Bidding.bidding_success(bidInformation) ? Bidding.bidding_success_people_message(people_list, bidInformation) : 0;

        setData('success', success);

        Bidding.bidding_pop(success,$scope);

        $scope.bidName = bidList[0].name;
        $scope.bidCount = bidInformation.length;

        $scope.go_to_bidding_count = function () {
            $location.path('bidding_count');
        }
    });
