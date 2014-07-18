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

Bidding.get_bidPrice = function(bidInformation,peopleList,bidPeople){
    _.map(bidInformation,function(infor){
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

Bidding.bidPhone_equal_peoplePhone = function(information,peopleList,people_list){
    _.map(information,function(infor){
        var list = _.find(peopleList, function (num) {
            return num.personPhone == infor.bidPhone
        });
        people_list.push({'name': list.personName, 'phone': list.personPhone, 'price': infor.bidPrice});
    });
};

Bidding.bidPrice_count = function(information){
    return _.countBy(information, function (num) {
        return num.bidPrice
    })
};

Bidding.price_count_array = function(price_count){
    return _.map(price_count, function (value, key) {
        return {'bidPrice': key, 'count': value}
    })
};