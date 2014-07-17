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
            $scope.status = _.find(activities, function (activity) {
                return activity.name == activityName
            }).status;
        }
        var even = _.find(activities, function (activity) {
            return activity.status == 0
        });
        if (even) {
            $scope.check = 1;
        }
        if (!even) {
            $scope.check = 0;
        }
        $scope.start = function () {
            var even = _.find(activities, function (activity) {
                return activity.name == activityName
            });
            if (even) {
                even.status = 0;
                $scope.status = 0;
                setData('startActivity',{'startActivity':activityName});
                setData('activities', activities);
            }
        };
        $scope.refresh = function () {
            var activities = getData('activities');
            var activityName = getData('activityName');
            var even = _.find(activities, function (activity) {
                return activity.name == activityName
            });
            if(even){
                var peopleList = even.peopleList || [];
                $scope.peopleList = even.peopleList;
                if (peopleList.length) {
                    $scope.peopleCount = peopleList.length;
                }
                else {
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
                var even = _.find(activities, function (activity) {
                    return activity.name == activityName
                });
                if(even) {
                    $scope.status = even.status = 1;
                    localStorage.removeItem('startActivity');
                    setData('activities', activities);
                    $location.path('/bidding_list');
                }
            }

        };
    });
