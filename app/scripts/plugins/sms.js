//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {
        var activities = JSON.parse(localStorage.getItem('activities'));
        var message = json_message.messages[0].message.replace(/\s/g, "");
        if (message.search(/bm/i) == 0) {
            var person_name = message.substr(2);
            var person_phone = json_message.messages[0].phone;
            if (JSON.parse(localStorage.getItem('startActivity'))) {
                var startActivity = JSON.parse(localStorage.getItem('startActivity'));
                for (var i = 0; i < activities.length; i++) {
                    if (activities[i].name == startActivity.startActivity) {
                        if (activities[i].status == 0) {
                            var peopleList = activities[i].peopleList || [];
                            for (var j = 0; j < peopleList.length; j++) {
                                if (peopleList[j].personPhone == person_phone) {
                                    native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名");
                                    break;
                                }
                            }
                            peopleList.unshift({'personName': person_name, 'personPhone': person_phone});
                            activities[i].peopleList = peopleList;
                            localStorage.setItem('activities', JSON.stringify(activities));

                            var signUp = document.getElementById("signUp");
                            if (signUp) {
                                var scope = angular.element(signUp).scope();
                                scope.$apply(function () {
                                scope.refresh()
                                });
                            }
                            native_accessor.send_sms(json_message.messages[0].phone, "恭喜报名成功！");
                            console.log("恭喜报名成功！");
                            if (!peopleList.length) {
                                peopleList.unshift({'personName': person_name, 'personPhone': person_phone});
                                activities[i].peopleList = peopleList;
                                localStorage.setItem('activities', JSON.stringify(activities));
                                native_accessor.send_sms(json_message.messages[0].phone, "恭喜报名成功！");
                                console.log("恭喜报名成功！");
                            }
                        }
                        else {
                            native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始或已经结束！");
                            console.log("活动尚未开始或已经结束！");
                        }
                    }

                }
            }
            else {
                native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始或已经结束！");
                console.log('活动尚未开始或已经结束！');
            }

//        location.reload([bForceGet]);
        }
    }
}

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
