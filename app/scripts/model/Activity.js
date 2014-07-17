function AL(){

}

AL.go_to_create_activity = function(){
    var activities = getData('activities');
    if (!activities.length){
        return true;
    }
};
AL.yellow_when_bidding_start = function(){
    var activities = getData('activities');
    var bidList = getData('bidList');
    for(var i = 0;i < activities.length;i++){
        var evens = _.filter(bidList, function(num){ return  num.activityName == activities[i].name; });
        if (evens.length){
            activities[i].colorStatus = evens[0].colorStatus;
        }
        if (!evens.length){
            activities[i].colorStatus = 1;
        }
    }
    return activities;
};


