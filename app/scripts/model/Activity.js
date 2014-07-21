function Activity(name,status){
    this.name = name;
    this.status = status;
}

Activity.prototype.save=function(){
    var activities = getData('activities');
    activities.unshift(this);
    setData('activities',activities);
};

Activity.go_to_create_activity = function(activities){
    if (!activities.length){
        return true;
    }
};
Activity.yellow_when_bidding_start = function(activities,bidList){
    _.map(activities,function(activity){
        var evens = _.filter(bidList, function(num){ return  num.activityName == activity.name; });
        activity.colorStatus = evens.length ? evens[0].colorStatus : 1;
    });
    return activities;
};

Activity.activity_equal_activityName = function(activities){
    var activityName = getData('activityName');
    return _.find(activities,function(activity){return activity.name == activityName})
};

Activity.activity_equal_activity_name = function(activity_name){
    var activities =  getData('activities');
    return _.find(activities,function(activity){return activity.name == activity_name})
};

Activity.create_activity_success = function(activity_name){
    var activity = new Activity(activity_name,1);
    activity.save(this);
    setData('activityName',activity_name);
};

Activity.activity_repeat = function(activity_name,$scope){
    if(Activity.activity_equal_activity_name(activity_name)){
        $scope.warning = '活动名称重复';
    }
};

Activity.create_activity = function(activity_name,$location){
    if(!Activity.activity_equal_activity_name(activity_name)){
        Activity.create_activity_success(activity_name);
        $location.path('/create_sign_up');
    }
};

Activity.activity_sign_up_end = function($scope,$location){
    var activities = getData('activities');
    if (confirm("确认要结束本次报名吗？")) {
        $scope.check = 0;
        $scope.status = Activity.activity_equal_activityName(activities).status = 1;
        setData('activities', activities);
        $location.path('/bidding_list');
    }
};
