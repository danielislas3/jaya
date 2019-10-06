const router = require('express').Router();
const {signup,login,logout} = require('../controllers/auth/authController')
const {verifyToken} = require('../middlewares/auth')
const {preuba} = require('../controllers/arrayController')
const passport = require ('../config/passport')
/* GET home page. */


router.get('/', verifyToken,preuba);

router.post('/signup',signup)
router.post('/login',passport.authenticate('local'),login)
router.get('/logout',logout)


router.get('/users', verifyToken,preuba);

module.exports = router;
