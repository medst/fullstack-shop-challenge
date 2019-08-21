const router = require('express').Router();

const { auth } = require('../middlewares/auth');
const { asyncMiddleware } = require('../middlewares/asyncmw');
const { validateShopInput } = require('../middlewares/inputValidation');
const { nearby, preferred, like, dislike, remove } = require('../controllers/shops');

router.get('/nearby', auth, validateShopInput, asyncMiddleware(nearby));

router.get('/preferred', auth, validateShopInput, asyncMiddleware(preferred));

router.post('/like', auth, validateShopInput, asyncMiddleware(like));

router.post('/dislike', auth, validateShopInput, asyncMiddleware(dislike));

router.post('/remove', auth, validateShopInput, asyncMiddleware(remove));

module.exports = router