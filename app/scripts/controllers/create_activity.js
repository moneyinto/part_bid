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
            var activityName = $scope.activityName;
            var activities =  getData('activities');
            if(Activity.activity_enqul_activityName(activities,activityName)){
                $scope.warning = '活动名称重复';
            }
            if(!Activity.activity_enqul_activityName(activities,activityName)){
                Activity.create_activity_sucess(activities,activityName);
                $location.path('/create_sign_up');
            }
        }

    });

