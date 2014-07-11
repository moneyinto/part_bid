'use strict';

angular.module('card1App')
    .controller('BiddingListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.status = 1;
        var activities = JSON.parse(localStorage.getItem('activities'));
        var activityName = JSON.parse(localStorage.getItem('activityName'));
        for (var i = 0;i < activities.length;i++){
            if(activities[i].status == 0){
                $scope.status = 0;
            }
        }
        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };
        $scope.start = function(){
          for (var j = 0;j < activities.length;j++){
              if (activities[j].name == activityName){
                  var bidList = activities[j].bidList || [];
//                  $scope.bidCount = bidList.length + 1;
                  console.log('jj');
                  bidList.unshift({'bid':"竞价" + (bidList.length + 1)});
                  activities[j].bidList = bidList;
                  localStorage.setItem('activities',JSON.stringify(activities));
                  break;
              }
          }
//          $location.path('/bidding_sign_up')
        };
//        for (var j = 0;j < activities.length;j++){
//            if (activities[j].name == activityName){
//
//                $scope.bidList = activities[j].bidList;
//                break;
//            }
//        }
    });