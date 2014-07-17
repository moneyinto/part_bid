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

        var information = _.sortBy(bidInformation, function (num) {
            return num.bidPrice
        });
        var even = _.find(activities, function (num) {
            return num.name == activityName
        });

        var peopleList = even.peopleList;
        var people_list = [];

        for (var j = 0; j < information.length; j++) {
            var list = _.find(peopleList, function (num) {
                return num.personPhone == information[j].bidPhone
            });
            people_list.push({'name': list.personName, 'phone': list.personPhone, 'price': information[j].bidPrice});

        }
        $scope.peopleList = people_list;
        var price_count = _.countBy(information, function (num) {
            return num.bidPrice
        });
        var priceCount = _.map(price_count, function (value, key) {
            return {'bidPrice': key, 'count': value}
        });

        setData('priceCount', priceCount);

        if (priceCount) {
            var bidSuccess = _.find(priceCount, function (num) {
                return num.count == 1
            });
            if (bidSuccess) {
                var sucess = _.find(people_list, function (num) {
                    return num.price == bidSuccess.bidPrice
                });
            }

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
        else {
            $scope.bidCount = 0;
        }
        $scope.go_to_bidding_count = function () {
            if (sucess) {
                $location.path('bidding_count');
            }
        }
    });
