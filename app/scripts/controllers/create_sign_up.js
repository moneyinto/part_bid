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
        var bidList = getData('bidList');

        $scope.colorStatus = bidList.length ? bidList[0].colorStatus : 1;

        $scope.status = Activity.activity_equal_activityName(activities).status;

        $scope.check = activity_start_status() ? 1 : 0;

        $scope.start = function () {
            var activities = getData('activities');
            $scope.status = Activity.activity_equal_activityName(activities).status = 0;
            setData('activities', activities);
        };

        $scope.refresh = function () {
//            var activities =  getData('activities');
            var peopleList = Activity.activity_equal_activityName(activities).peopleList || [];
            $scope.peopleList = peopleList;
            $scope.peopleCount = peopleList.length;
        };

        $scope.refresh();

        setData('activities', activities);

        $scope.end = function () {
            var activities = getData('activities');
            if (confirm("确认要结束本次报名吗？")) {
                $scope.check = 0;
                $scope.status = Activity.activity_equal_activityName(activities).status = 1;
                setData('activities', activities);
                $location.path('/bidding_list');
            }
        };
    });
