const router = require('express').Router();

const { asyncMiddleware } = require('../middlewares/asyncmw');
const { validateUserInput } = require('../middlewares/inputValidation');
const { login, signup, logout } = require('../controllers/user');

router.post('/login', validateUserInput, asyncMiddleware(login));

router.post('/signup', validateUserInput, asyncMiddleware(signup));

router.post('/logout', logout);

module.exports = router