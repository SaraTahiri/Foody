const express = require('express');
const router = express.Router();

const {login} = require('../Controllers/userController')


router.route('/login')
.post(login)


module.exports = router