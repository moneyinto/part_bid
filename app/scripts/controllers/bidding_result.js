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
        var information = Bidding.bidPrice_sort(bidInformation);
        var peopleList = Activity.activity_enqul_activityName(activities,activityName).peopleList;
        var people_list = [];
        Bidding.bidPhone_equal_peoplePhone(information,peopleList,people_list);
        $scope.peopleList = people_list;
        var price_count = Bidding.bidPrice_count(information);
        var priceCount = Bidding.price_count_array(price_count);
        setData('priceCount', priceCount);
        if (priceCount) {
            var bidSuccess = _.find(priceCount, function (price) {
                return price.count == 1
            });
        }
        if (bidSuccess) {
            var sucess = _.find(people_list, function (num) {
                return num.price == bidSuccess.bidPrice
            });
            setData('sucess', sucess);
        }

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
            if (priceCount) {
                $location.path('bidding_count');
            }
        }
    });
