'use strict';

angular.module('card1App')
    .controller('BiddingResultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_bidding_list = function () {
            localStorage.removeItem('priceCount');
            localStorage.removeItem('sucess');
            $location.path('bidding_list');
        };
        var activities = getData('activities');
        var activityName = getData('activityName');
        var bidList = getData('bidList');
        var bidInformation = bidList[0].bidInformation;
        var people_list = [];
        Bidding.bidPhone_equal_peoplePhone(bidInformation,activities,activityName,people_list);
        $scope.peopleList = people_list;
        setData('priceCount', Bidding.price_count_array(bidInformation));
        var sucess;
        if (Bidding.bidding_sucess(bidInformation)) {
            sucess = Bidding.bidding_sucess_people_message(people_list,bidInformation);
        }
        if(!Bidding.bidding_sucess(bidInformation)){
            sucess = 0;
        }
        setData('sucess', sucess);
        if (sucess) {
            $('#alert').modal('show');
            $scope.bidResult1 = "竞价结果：";
            $scope.phone1 = "电话：";
            $scope.price1 = "竞价：￥";
            $scope.sucessName1 = sucess.name;
            $scope.sucessPhone1 = sucess.phone;
            $scope.sucessPrice1 = sucess.price;
            setTimeout(function () {
                $scope.$apply(function () {
                    $('#alert').modal('hide');
                });
            }, 3000);
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.bidResult = "竞价结果：";
                    $scope.phone = "电话：";
                    $scope.price = "竞价：￥";
                    $scope.sucessName = sucess.name;
                    $scope.sucessPhone = sucess.phone;
                    $scope.sucessPrice = sucess.price;
                });
            }, 3000);
        }
        $scope.bidName = bidList[0].name;
        if (bidInformation) {
            $scope.bidCount = bidInformation.length;
        }
        if (!bidInformation){
            $scope.bidCount = 0;
        }
        $scope.go_to_bidding_count = function () {
                $location.path('bidding_count');
        }
    });
