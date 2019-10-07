const router = require('express').Router();
const {signup,login,logout} = require('../controllers/auth/authController')
const {verifyToken} = require('../middlewares/auth')
const {preuba} = require('../controllers/arrayController')
const passport = require ('../config/passport')

const {originalDownload} = require('../controllers/arrayController')

router.post('/signup',signup)
router.post('/login',passport.authenticate('local'),login)
router.get('/logout',logout)

// router.get('/users', verifyToken,preuba);
// router.get('/asc', verifyToken,);
router.get('/asc',logout)
router.get('/des',logout)
router.get('/mix',logout)

router.get('/assets/sorted.txt',logout)
router.get('/assets/original.txt',originalDownload)

module.exports = router;
