function Activity(){

}

Activity.go_to_create_activity = function(activities){
    if (!activities.length){
        return true;
    }
};
Activity.yellow_when_bidding_start = function(activities,bidList){
    _.map(activities,function(activity){
        var evens = _.filter(bidList, function(num){ return  num.activityName == activity.name; });
        if (evens.length){
            activity.colorStatus = evens[0].colorStatus;
        }
        if (!evens.length){
            activity.colorStatus = 1;
        }
    });
    return activities;
};

Activity.activity_enqul_activityName = function(activities,activityName){
    return _.find(activities,function(activity){return activity.name == activityName})
};

Activity.create_activity_sucess = function(activities,activityName){
    activities.unshift({'name' : activityName,'status':1});
    setData('activities',activities);
    setData('activityName',activityName);
};

