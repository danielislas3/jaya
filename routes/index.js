const router = require('express').Router();
const {signup,login,logout} = require('../controllers/auth/authController')
const {verifyToken} = require('../middlewares/auth')
const {preuba} = require('../controllers/arrayController')
const passport = require ('../config/passport')

const {originalDownload,sortedDownload,sortController} = require('../controllers/arrayController')

router.post('/signup',signup)
router.post('/login',passport.authenticate('local'),login)
router.get('/logout',logout)

// router.get('/users', verifyToken,preuba);
// router.get('/asc', verifyToken,);
router.get('/asc',sortController)
router.get('/des',sortController)
router.get('/mix',sortController)

router.get('/assets/sorted.txt',sortedDownload)
router.get('/assets/original.txt',originalDownload)

module.exports = router;
