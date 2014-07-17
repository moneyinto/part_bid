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
            var even =_.find(activities,function(activity){return activity.name == activityName})
            if(even){
                $scope.warning = '活动名称重复';
            }
            if(!even){
                activities.unshift({'name' : activityName,'status':1});
                setData('activities',activities);
                setData('activityName',activityName);
                $location.path('/create_sign_up');
            }
            if (!activities.length) {
                activities.unshift({'name': activityName,'status':1});
                setData('activities',activities);
                setData('activityName',activityName);
                $location.path('/create_sign_up')
            }
        }

    });

