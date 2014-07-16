'use strict';

angular.module('card1App')
    .controller('BiddingResultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_to_bidding_list = function() {
            localStorage.removeItem('priceCount');
            localStorage.removeItem('sucess');
            $location.path('bidding_list');
        };
        var activities = JSON.parse(localStorage.getItem('activities'));
        var activityName = JSON.parse(localStorage.getItem('activityName'));
        var bidList = JSON.parse(localStorage.getItem('bidList'));
        var bidInformation = bidList[0].bidInformation;
        var information = _.sortBy(bidInformation,function(num){return num.bidPrice});
        var even = _.find(activities,function(num){return num.name == activityName});
        var peopleList = even.peopleList;
        var people_list = [];
        for (var j = 0;j < information.length;j++){
            var list = _.find(peopleList,function(num){return num.personPhone == information[j].bidPhone});
            people_list.push({'name':list.personName,'phone':list.personPhone,'price':information[j].bidPrice});

        }
        console.log(people_list[0].name);
        $scope.peopleList = people_list;

        var priceCount = [];
        var n = 1;
        for (var i = 0; i < information.length; i++) {
            if (i == information.length - 1) {
                if (information[i].bidPrice == information[i - 1].bidPrice) {
                    priceCount.push({'bidPrice': information[i].bidPrice, 'count': n});
                    break;
                }
                else {
                    priceCount.push({'bidPrice': information[i].bidPrice, 'count': n});
                }
            }
            else {
                if (information[i].bidPrice == information[i + 1].bidPrice) {
                    n = n + 1;
                }
                else {
                    priceCount.push({'bidPrice': information[i].bidPrice, 'count': n});
                    n = 1;
                }
            }
        }
        localStorage.setItem('priceCount',JSON.stringify(priceCount));
        var bidSuccess = _.find(priceCount,function(num){return num.count == 1});
        var sucess = _.find(people_list,function(num){return num.price == bidSuccess.bidPrice});
        console.log(sucess);
        localStorage.setItem('sucess',JSON.stringify(sucess));
        $scope.sucessName = sucess.name;
        $scope.sucessPhone = sucess.phone;
        $scope.sucessPrice = sucess.price;
        $scope.bidName = bidList[0].name;
        if(bidInformation.length){
            $scope.bidCount = bidInformation.length;
        }
        else{
            $scope.bidCount = 0;
        }
    });
