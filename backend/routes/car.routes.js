const router     = require('express').Router();
const ctrl       = require('../controllers/car.controller');
const islogin = require('../middlewares/islogin');
const isAdmin    = require('../middlewares/isAdmin');
const upload     = require('../config/multerConfig');

router.get('/allcars',           ctrl.getAllCars);           // public
router.get('/car/:id',        ctrl.getCarById);           // public
router.post('/create',  islogin    ,isAdmin , upload.array('images',5), ctrl.createCar);
router.put('/car/:id',    islogin, isAdmin, ctrl.updateCar);
router.delete('/car/:id',   islogin, isAdmin, ctrl.deleteCar);

module.exports = router;