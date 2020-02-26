const db = require('../../../config/database').db;
const md5 = require('md5');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

/*===================Sign Up Model=============================*/
let signup = async(postData, callback) => {

    var res = await db.select('email').where({ 'email': postData['email'] }).get('users');
    if (res.length > 0) {
        callback(null, 1);
    } else {
        var signupData = {
            "email": postData['email'],
            "first_name": postData['first_name'],
            "dob": postData['dob'],
            "password": md5(postData['password']),
            "occupation": postData['occupation'],
            "lat": postData['lat'],
            "lng": postData['lng']

        }
        var insertRes = await db.returning('user_id').insert('users', signupData);
        var result = await db.select('*').where({ 'user_id': insertRes.insertId }).get('users');
        callback(null, result[0]);

    }
}



module.exports = {
    signup
}