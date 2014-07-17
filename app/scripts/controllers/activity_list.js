'use strict';

angular.module('card1App')
    .controller('ActivityListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        if(AL.go_to_create_activity()){
            $location.path('/create_activity');
        }

        $scope.activities = AL.yellow_when_bidding_start();

        $scope.go_to_activity = function () {
            $location.path('/create_activity')
        };

        $scope.go_to_sign_up = function (activity) {
            var activityName = activity.name;
            setData('activityName',activityName);
        };
    });
