'use strict';

angular.module('card1App')
    .controller('ActivityListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var activities = JSON.parse(localStorage.getItem('activities'));
        $scope.activities = activities;
        if (activities) {
            $location.path('/')
        }
        else {
            $location.path('/create_activity')
        }
        $scope.go_to_activity = function () {
            $location.path('/create_activity')
        };
        $scope.go_to_sign_up = function (activity) {
            var activityName = activity.name;
            localStorage.setItem('activityName' , JSON.stringify(activityName))
        }
    });
