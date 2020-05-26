const router = require('express').Router();

const panierCtrl = require('../controllers/panier');

router.get('/livreur' , panierCtrl.allLivreur);

router.get('/after-cmd/:id' , panierCtrl.actualiser_livreur);

router.get('/client/:id' , panierCtrl.panier_client);


router.get('/:id' , panierCtrl.all);

router.post('/' , panierCtrl.add);

router.post('/valider-panier' , panierCtrl.valider_cmd);

router.post('/update-by-livreur/:id' , panierCtrl.updateByCodeLivreur);

router.post('/:id' , panierCtrl.update);


module.exports = router;