'use strict';

angular
  .module('partyBidApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create_activity',{
            templateUrl:'views/create_activity.html',
            controller:'CreateActivityCtrl'
      })
      .when('/',{
            templateUrl:'views/activity_list.html',
            controller:'ActivityListCtrl'
        })
      .when('/create_sign_up',{
            templateUrl:'views/create_sign_up.html',
            controller:'CreateSignUpCtrl'
        })
        .when('/bidding_list',{
            templateUrl:'views/bidding_list.html',
            controller:'BiddingListCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
