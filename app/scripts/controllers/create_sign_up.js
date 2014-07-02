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
        $scope.start_end = "开始";
        $scope.start = function () {
            if ($scope.start_end == "开始" ){
                $scope.start_end = "结束";
            }
            else{
                if(confirm("确认要结束本次报名吗？")){
                    $scope.start_end = "开始";
                }
                else{
                    $scope.start_end = "结束";
                }
           }

        };
        $scope.bidding = function () {
            $scope.start = 0;
            $location.path('/bidding_list');
        }
    });
