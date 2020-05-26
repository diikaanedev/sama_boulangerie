const router = require('express').Router();

const livreurCtrl = require('../controllers/livreur');

router.post('/sign-in' , livreurCtrl.add);
router.post('/log-in' , livreurCtrl.login);

module.exports = router;