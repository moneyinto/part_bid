function Bidding(){

}

Bidding.bidding_in_activity = function(bidList,activityName){
    return _.filter(bidList, function (bidList) {
        return  bidList.activityName == activityName
    });
};

Bidding.bidding_start_status = function(bidList){
    return _.find(bidList, function (num) {
        return num.colorStatus == 0
    })
};

Bidding.bidding_create = function(bidList,activityName){
    setData('bidName', Bidding.bidding_in_activity(bidList,activityName).length + 1);
    bidList.unshift({'name': Bidding.bidding_in_activity(bidList,activityName).length + 1, 'colorStatus': 0, 'activityName': activityName});
    setData('bidList', bidList);
};

Bidding.bidding_sign_up_end_status = function(bidList,bid_name,activityName){
    return _.find(bidList,function(num){ return num.name == bid_name && num.activityName == activityName}).colorStatus;
};

Bidding.end_sucess = function(bidList){
    bidList[0].colorStatus = 1;
    localStorage.removeItem('bidName');
    setData('bidList',bidList);
};

Bidding.bidName_equal_activityName = function(bidList,activityName,bid_name){
    return _.find(bidList,function(num){ return num.name == bid_name && num.activityName == activityName})
};

Bidding.get_bidPrice = function(bidList,activityName,bid_name,peopleList,bidPeople){
    _.map(Bidding.bidName_equal_activityName(bidList,activityName,bid_name).bidInformation,function(infor){
        var bidPhone = infor.bidPhone;
        var personInformation = _.find(peopleList, function(num){ return num.personPhone == bidPhone; });
        bidPeople.push(personInformation);
    });
};

Bidding.bidPrice_sort = function(bidInformation){
    return _.sortBy(bidInformation, function (num) {
        return num.bidPrice
    })
};

Bidding.bidPhone_equal_peoplePhone = function(bidInformation,activities,activityName,people_list){
    _.map(Bidding.bidPrice_sort(bidInformation),function(infor){
        var list = _.find(Activity.activity_enqul_activityName(activities,activityName).peopleList, function (num) {
            return num.personPhone == infor.bidPhone
        });
        people_list.push({'name': list.personName, 'phone': list.personPhone, 'price': infor.bidPrice});
    });
};

Bidding.bidPrice_count = function(bidInformation){
    return _.countBy(Bidding.bidPrice_sort(bidInformation), function (num) {
        return num.bidPrice
    })
};

Bidding.price_count_array = function(bidInformation){
    return _.map(Bidding.bidPrice_count(bidInformation), function (value, key) {
        return {'bidPrice': key, 'count': value}
    })
};

Bidding.bidding_success = function(bidInformation){
    return _.find(Bidding.price_count_array(bidInformation), function (price) {
        return price.count == 1
    })
};

Bidding.bidding_success_people_message = function(people_list,bidInformation){
    return _.find(people_list, function (num) {
        return num.price == Bidding.bidding_success(bidInformation).bidPrice
    })
};