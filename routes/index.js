const router = require('express').Router();
const {signup,login,logout} = require('../controllers/auth/authController')
const {verifyToken} = require('../middlewares/auth')
const {preuba} = require('../controllers/arrayController')
const passport = require ('../config/passport')

const {originalDownload,sortedDownload,sortController} = require('../controllers/arrayController')

router.post('/signup',signup)
router.post('/login',passport.authenticate('local'),login)
router.get('/logout',logout)

router.get('/asc',verifyToken,sortController)
router.get('/des',verifyToken,sortController)
router.get('/mix',verifyToken,sortController)

router.get('/assets/sorted.txt',verifyToken,sortedDownload)
router.get('/assets/original.txt',verifyToken,originalDownload)

module.exports = router;
