var express = require('express');
var router = express.Router();


var crud = require('./api/app/user');
var sell = require('./api/app/sellcar');
var buycar = require('./api/app/buycar');
var buyCarform = require('./api/app/buycar-form');
var rent = require('./api/app/rentcar');


router.post('/add',crud.addData);
router.delete('/deluser/:id', crud.deleteData);
router.get('/getuser',crud.getData);
router.post('/signin',crud.signin);

router.put('/upbuycar/:id', buycar.updateData);
router.post('/buycar', buycar.addData);
router.get('/getbuycar', buycar.getData);
router.delete('/delbuycar/:id', buycar.deleteData);

router.post('/rentcar', rent.addData);
router.get('/getrentcar',rent.getData);
router.delete('/delrentcar/:id',rent.deleteData);

router.delete('/delsell/:id', sell.deleteData);
router.get('/getsellcar',sell.getData);
router.post('/sellcar',sell.addData);

router.post('/buycarForm',buyCarform.addData);
router.get('/getbuycarForm',buyCarform.getData);
router.delete('/delbuycarForm/:id',buyCarform.deleteData);

module.exports = router;
