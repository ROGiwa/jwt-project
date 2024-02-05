const express = require('express');
const router = express.Router();
const authenMiddleware = require('../middleware/auth');

const { login, dashboard } = require('../controllers/main');

router.route('/dashboard').get(authenMiddleware, dashboard);
router.route('/login').post(login);

module.exports = router;
