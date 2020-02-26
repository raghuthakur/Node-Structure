const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/v1/user');




/*===================Sign Up Router=============================*/
router.post('/signup', (req, res) => {
    let required = ['first_name', 'email', 'dob', 'password', 'occupation', 'lat', 'lng'];
    userController.getErrorMsg(required, req.body, (callback) => {
        if (callback == '') {
            userController.signup(req.body, (data) => {
                res.send(data);
            });
        } else {
            res.send(callback);
        }
    })
});

module.exports = router;