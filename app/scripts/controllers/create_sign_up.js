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

        $scope.colorStatus = bidList.length ? bidList[0].colorStatus : 1;

        $scope.status = activityName ? Activity.activity_equal_activityName(activities, activityName).status : 1;

        $scope.check = activity_start_status(activities) ? 1 : 0;

        $scope.start = function () {
            $scope.status = Activity.activity_equal_activityName(activities, activityName).status = 0;
            setData('activities', activities);
        };

        $scope.refresh = function () {
            var activities = getData('activities');
            var activityName = getData('activityName');
            var peopleList = Activity.activity_equal_activityName(activities, activityName).peopleList || [];
            $scope.peopleList = Activity.activity_equal_activityName(activities, activityName).peopleList;
            $scope.peopleCount = peopleList.length;
        };

        $scope.refresh();
        setData('activities', activities);

        $scope.end = function () {
            var activities = getData('activities');
            if (confirm("确认要结束本次报名吗？")) {
                $scope.check = 0;
                $scope.status = Activity.activity_equal_activityName(activities, activityName).status = 1;
                setData('activities', activities);
                $location.path('/bidding_list');
            }
        };
    });
