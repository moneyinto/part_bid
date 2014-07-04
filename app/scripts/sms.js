//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {

        var activities = JSON.parse(localStorage.getItem('activities'));
        var person_name = json_message.messages[0].message;
        var person_phone = json_message.messages[0].phone;
        var activityName = JSON.parse(localStorage.getItem('activityName'));
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].name == activityName) {
                var peopleList = activities[i].peopleList || [];
                var peopleCount = peopleList.length;
                for (var j = 0; j < peopleList.length; j++) {
//                    console.log(peopleList[j].personPhone);
//                    console.log(person_phone);
                    if (peopleList[j].personPhone != person_phone) {
                        peopleList.unshift({'personName': person_name, 'personPhone': person_phone});
                        activities[i].peopleList = peopleList;
                        peopleCount++;
                        localStorage.setItem('activities', JSON.stringify(activities));
                        break;
                    }
                }
                if (!peopleList.length) {
                    peopleCount = 1;
                    peopleList.unshift({'personName': person_name, 'personPhone': person_phone});
                    activities[i].peopleList = peopleList;
                    localStorage.setItem('activities', JSON.stringify(activities));
                }

            }

        }
        localStorage.setItem('peopleCount',peopleCount);
//        location.reload([bForceGet]);
    }
}

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
