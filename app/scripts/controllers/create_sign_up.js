'use strict';

angular.module('card1App')
    .controller('CreateSignUpCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_list = function () {
            $location.path('/create_list')
        };
        var activities = getData('activities');
        var activityName = getData('activityName');
        var bidList = getData('bidList');
        if (bidList.length) {
            $scope.colorStatus = bidList[0].colorStatus;
        }
        if (!bidList.length) {
            $scope.colorStatus = 1;
        }

        if (!activityName) {
            $scope.status = 1;
        }
        if (activityName) {
            $scope.status = Activity.activity_enqul_activityName(activities, activityName).status;
        }

        if (activity_start_status(activities)) {
            $scope.check = 1;
        }
        if (!activity_start_status(activities)) {
            $scope.check = 0;
        }
        $scope.start = function () {

            if (Activity.activity_enqul_activityName(activities, activityName)) {
                Activity.activity_enqul_activityName(activities, activityName).status = 0;
                $scope.status = 0;
                setData('activities', activities);
            }
        };
        $scope.refresh = function () {
            var activities = getData('activities');
            var activityName = getData('activityName');
            if (Activity.activity_enqul_activityName(activities, activityName)) {
                var peopleList = Activity.activity_enqul_activityName(activities, activityName).peopleList || [];
                $scope.peopleList = Activity.activity_enqul_activityName(activities, activityName).peopleList;
                if (peopleList.length) {
                    $scope.peopleCount = peopleList.length;
                }
                if (!peopleList.length) {
                    $scope.peopleCount = 0;
                }
            }
        };
        $scope.refresh();
        setData('activities', activities);
        $scope.end = function () {
            var activities = getData('activities');
            if (confirm("确认要结束本次报名吗？")) {
                $scope.check = 0;
                if (Activity.activity_enqul_activityName(activities, activityName)) {
                    $scope.status = Activity.activity_enqul_activityName(activities, activityName).status = 1;
                    setData('activities', activities);
                    $location.path('/bidding_list');
                }
            }

        };
    });
