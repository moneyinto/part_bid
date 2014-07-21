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
            if(Activity.activity_equal_activity_name(activity_name)){
                $scope.warning = '活动名称重复';
            }
            if(!Activity.activity_equal_activity_name(activity_name)){
                Activity.create_activity_success(activity_name);
                $location.path('/create_sign_up');
            }
        }
    });

