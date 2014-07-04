'use strict';

angular.module('card1App')
    .controller('CreateSignUpCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_list = function () {
            $location.path('/create_list')
        };
        var activities = JSON.parse(localStorage.getItem('activities'));
        var activityName = JSON.parse(localStorage.getItem('activityName'));
        for (var i = 0; i < activities.length; i++){
            if (activities[i].name == activityName) {
                $scope.status = activities[i].status;
                break;
            }
        }
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].status == 0) {
                $scope.check = 1;
//                console.log(check);
                break;
            }
            else{
                $scope.check = 0;
            }
        }
        $scope.start = function () {
            for (var i = 0; i < activities.length; i++){
                if (activities[i].name == activityName) {
                    $scope.status = activities[i].status = 0;
                    localStorage.setItem('activities',JSON.stringify(activities));
                    break;
                }
            }
        };
        $scope.end = function () {
            if (confirm("确认要结束本次报名吗？")){
                for (var i = 0; i < activities.length; i++){
                    if (activities[i].name == activityName) {
                        $scope.status = activities[i].status = 1;
                        localStorage.setItem('activities',JSON.stringify(activities));
                        break;
                    }
                }
            }

        };

//        $scope.bidding = function () {
//            $scope.start = 0;
//            $location.path('/bidding_list');
//        };

        for(var i = 0; i < activities.length; i++){
            if(activities[i].name == activityName ){
               var peopleList = activities[i].peopleList || [];
                $scope.peopleList = activities[i].peopleList;
                if (peopleList.length){
                    $scope.peopleCount = peopleList.length;
                }
                else{
                    $scope.peopleCount = 0;
                }
                break;
            }
        }
        localStorage.setItem('activities',JSON.stringify(activities));
    });
