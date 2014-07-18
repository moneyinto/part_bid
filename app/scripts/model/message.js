bid_sign_up_refresh = function(){
    var bidSignUp = document.getElementById("bidSignUp");
    if (bidSignUp) {
        var scopeOne = angular.element(bidSignUp).scope();
        scopeOne.$apply(function () {
            scopeOne.fresh();
        });
    }
};

activity_sign_up_refresh = function(){
    var signUp = document.getElementById("signUp");
    if (signUp) {
        var scope = angular.element(signUp).scope();
        scope.$apply(function () {
            scope.refresh();
        });
    }
};

activity_start_status = function(activities){
    return _.find(activities, function (activity) {
        return activity.status == 0
    });

};

activity_phone_repeat = function(peopleList,person_phone){

    return _.find(peopleList, function (list) {
        return list.personPhone == person_phone
    })
};

activity_sign_up_sucess = function(peopleList,activities,person_name,person_phone,json_message){
    if (!activity_phone_repeat(peopleList, person_phone)) {
        peopleList.unshift({'personName': person_name, 'personPhone': person_phone});
        activity_start_status(activities).peopleList = peopleList;
        setData('activities', activities);
        native_accessor.send_sms(json_message.messages[0].phone, "恭喜报名成功！");
    }
};

activity_sign_up_repeat = function(peopleList, person_phone,json_message){
    if (activity_phone_repeat(peopleList, person_phone)) {
        native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名");
    }
};

activity_sign_up_fail = function(activities,json_message){
    if (!activity_start_status(activities)) {
        native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始或已经结束！");
    }
};