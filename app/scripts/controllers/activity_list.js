'use strict';

angular.module('card1App')
    .controller('ActivityListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var activities = getData('activities');
        var bidList = getData('bidList');

        if(Activity.go_to_create_activity(activities)){
            $location.path('/create_activity');
        }

        $scope.activities = Activity.yellow_when_bidding_start(activities,bidList);

        $scope.go_to_activity = function () {
            $location.path('/create_activity')
        };

        $scope.go_to_sign_up = function (activity) {
            var activityName = activity.name;
            setData('activityName',activityName);
        };
    });
