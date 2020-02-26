const userModel = require('../../../models/api/v1/user');


// ==================== Get Error Message====================== //
let getErrorMsg = (required, request, cb) => {
    var count = required.length;
    var i = 0;
    required.forEach(function(value, key) {
        if ((request[value] == '' || request[value] == undefined) && i == key && i < count) {
            var data = {};
            if (key < count - (count - (key + 1))) {
                var data = {
                    "statusCode": 400,
                    "statusMessage": value + " Key is empty or missing"
                };

                cb(data);
                return true;
            }
        }
        i++;
    });
    if (i == count) {
        cb('');
    }
}


/*===================Sign Up Controler=============================*/
let signup = (data, callback) => {
    userModel.signup(data, (err, response) => {
        if (err) {
            callback({
                "statusCode": 500,
                "statusMessage": "Something went wrong"
            });
        } else if (response == 1) {
            callback({
                "statusCode": 400,
                "statusMessage": "Already Registered",
                "result": "This email address is already registered. Please signup with a different email address."
            })
        } else {
            callback({
                "statusCode": 200,
                "statusMessage": "User Result",
                "result": response
            });
        }
    });
}



module.exports = {
    getErrorMsg,
    signup

}