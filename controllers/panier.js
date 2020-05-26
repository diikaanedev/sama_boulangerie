
const panierModel = require('../models/panier');

const livreurModel = require('../models/livreurs');

const boulangerie = require('../models/boulangerie');

exports.add = (req, res) => {

    let { produits, boulangerie, clientNom, clientTel, prix_total, choix_livraison, type_paiement } = req.body;

    panierModel.create({
        boulangerie: boulangerie,
        nomClient: clientNom,
        telephoneClient: clientTel,
        produits: produits,
        prixTotal: prix_total,
        choixLivraison: choix_livraison,
        validationCmd: 0,
        paieCmd: 0,
        statusLivraison: 0,
        type_paiement: type_paiement,
        livreurCode: '',
        validPaiement: '1'
    }).then((panier) => {
        res.json({
            message: "Insertion Réussi",
            data: panier,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: "erreur Insertion",
            data: err,
            statusCode: 304
        });
    });
}

exports.all = (req, res) => {

    const { id } = req.params;

    boulangerie.findOne({
        raw: true,
        where: {
            code: id
        }
    }).then((result) => {
        panierModel.findAll(
            {
                raw: true,
                where: {
                    validationCmd: 0,
                    paieCmd: "0",
                    statusLivraison: "0",
                    validPaiement: "1"
                }
            }
        ).then((panier) => {

            let paniers = [];

            panier.forEach(element => {

                // if (element.boulangerie.split(':')[1].split(',')[0].trim() == id) {
                //     paniers.add(element);
                // }

            });


            res.json({
                message: "Insertion Réussi",
                data: panier,
                statusCode: 200
            });
        }).catch((errPanier) => {
            res.json({
                message: "Erreur ",
                data: errPanier,
                statusCode: 304
            })
        });
    }).catch((err) => {
        res.json({
            message: "Erreur ",
            data: err,
            statusCode: 304
        })
    });

}

exports.panier_client = (req, res) => {

    let { id } = req.params;

    panierModel.findAll({
        nest: true,
        where: {
            // validPaiement: "1",
            telephoneClient: id,
            // validationCmd: 1,
            // paieCmd: "1",
            // statusLivraison: "0"
        }
    }).then((panier) => {
        res.json({
            message: "panier trouver",
            data: panier,
            statusCode: 200
        });
    }).catch((err) => {
        res.json({
            message: "erreur",
            data: err,
            statusCode: 304
        })
    });

}

exports.allLivreur = (req, res) => {
    panierModel.findAll(
        {
            raw: true,
            where: {
                validationCmd: 1,
                statusLivraison: "0",
                paieCmd: "1",
                validPaiement: "1"
            }
        }
    ).then((panier) => {
        res.json({
            message: "Listage des Paniers ",
            data: panier,
            statusCode: 200
        })
    }).catch((errPanier) => {
        res.json({
            message: "Erreur ",
            data: errPanier,
            statusCode: 304
        })
    });

}

exports.updateByCodeLivreur = (req, res) => {
    const { id } = req.params;
    

    panierModel.update(req.body, { where: { 
        livreurCode : id , 
        statusLivraison : "2"
     } }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Modifictation Réussi avec success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur ',
            data: err
        });
    });
}

exports.update = (req, res) => {

    const { id } = req.params;


    panierModel.update(req.body, { where: { id } }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Modifictation Réussi avec success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur ',
            data: err
        });
    });

}

exports.valider_cmd = (req, res) => {

    let { code_panier, code_livreur } = req.body;

    panierModel.findOne({
        raw: true,
        where: {
            id: code_panier
        }
    }).then(panier => {

        livreurModel.findOne({
            raw: true,
            where: {
                code: code_livreur
            }
        }).then((livreur) => {
            panierModel.update({
                livreurCode: livreur.code,
                statusLivraison: "2"
            }, {
                where: {
                    id: panier.id
                }
            }).then((updatedPanier) => {
                res.json({
                    message: "Updated successfuly",
                    data: updatedPanier,
                    statusCode: 200
                });
            }).catch((errUpdated) => {
                res.json({
                    message: "Erreur Updated",
                    data: errUpdated,
                    statusCode: 304
                });
            });
        }).catch((errLivreur) => console.log(errLivreur));

    }).catch(err => console.log(err));


}

exports.actualiser_livreur = (req, res) => {

    const { id } = req.params;

    console.log(`code livreur => ${id}`);
    

    panierModel.findOne({
        raw: true,
        where: {
            livreurCode: id,
            statusLivraison: "2"
        }
    }).then(panier => {
        res.json({
            message: "Actualisation",
            data: panier,
            statusCode: 200
        });
    }).catch(err => console.log(err));


}



