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
                if(activities[i].status){
                    $scope.status = activities[i].status;
                    break;
                }
                else{
                    $scope.status = activities[i].status = 1;
                    console.log(status);
                    break;
                }

            }
        }
        $scope.start = function () {
            for (var i = 0; i < activities.length; i++){
                if (activities[i].name == activityName) {
                    $scope.status = activities[i].status = 0;
                    console.log(status);
                    break;
                }
            }
//            if ($scope.start_end == "开始" ){
//                $scope.start_end = "结束";
//            }
//            else{
//                if(confirm("确认要结束本次报名吗？")){
//                    $scope.start_end = "开始";
//                }
//                else{
//                    $scope.start_end = "结束";
//                }
//           }
        };
        $scope.end = function () {
            if (confirm("确认要结束本次报名吗？")){
                for (var i = 0; i < activities.length; i++){
                    if (activities[i].name == activityName) {
                        $scope.status = activities[i].status = 1;
                        break;
                    }
                }
            }

        };
        localStorage.setItem('activities',JSON.stringify(activities));
//        $scope.bidding = function () {
//            $scope.start = 0;
//            $location.path('/bidding_list');
//        };

        $scope.peopleCount = localStorage.getItem('peopleCount');
        var activities = JSON.parse(localStorage.getItem('activities'));
        var activityName = JSON.parse(localStorage.getItem('activityName'));
        for(var i = 0; i < activities.length; i++){
               console.log('bbb');
            if(activities[i].name == activityName ){
                console.log('aaa');
               $scope.peopleList = activities[i].peopleList;
                console.log(activities[i].peopleList)
            }
        }
    });
