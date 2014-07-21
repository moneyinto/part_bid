'use strict';

angular.module('card1App')
    .controller('CreateActivityCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_list = function () {
            $location.path('/')
        };
        $scope.activities = getData('activities');

        $scope.create = function () {
            var activity_name = $scope.activityName;
            Activity.activity_repeat(activity_name,$scope);
            Activity.create_activity(activity_name,$location);
        }
    });

