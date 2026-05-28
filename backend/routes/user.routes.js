const router     = require('express').Router();
const ctrl       = require('../controllers/user.controller');
const islogin = require('../middlewares/islogin');
// const isAdmin    = require('../middlewares/isAdmin');

// Customer routes
router.get('/profile',  islogin,           ctrl.getProfile);      // own profile
router.put('/profile',  islogin,           ctrl.updateProfile);   // edit own profile

// Admin routes
router.get('/',         islogin,  ctrl.getAllUsers);      // all users
router.get('/:id',      islogin,  ctrl.getUserById);     // single user
router.put('/:id',      islogin,  ctrl.updateUserStatus);// block/unblock
router.delete('/:id',   islogin,  ctrl.deleteUser);      // delete user

module.exports = router;