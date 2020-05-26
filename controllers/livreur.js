const livreurModel = require('../models/livreurs');

const randomStrig = require('randomstring');


const bcrytjs = require('bcryptjs');

const salt = bcrytjs.genSaltSync(10);

const jwt = require('jsonwebtoken');

exports.add = (req, res) => {

    let { nom, telephone, position, mot_de_passe  , code} = req.body;

    mot_de_passe = bcrytjs.hashSync(mot_de_passe, salt);

    // let code = randomStrig.generate({
    //     length: 12,
    //     charset: 'alphabetic'
    // });

    livreurModel.create({
        nom,
        code,
        telephone,
        position,
        mot_de_passe,
    }).then((livreur) => {
        res.json({
            message: "Livreur inscrit avec success",
            data: livreur,
            statusCode: 200
        });
    }).catch((errLivreur) => {
        res.json({
            message: "Erreur ",
            data: errLivreur,
            statusCode: 304
        });
    });

}

exports.login = (req, res) => {

    let { telephone, mot_de_passe } = req.body;

    console.log(req.body);


    livreurModel.findOne({
        raw: true,
        where: {
            telephone
        }
    }).then((livreur) => {

        if (bcrytjs.compareSync(mot_de_passe, livreur.mot_de_passe)) {
            res.json({
                message: "Connection réussi",
                data: livreur,
                statusCode: 200
            });
        } else {
            return res.json({
                message: 'Identifiant Incorrect',
                data: null,
                statusCode: 401
            });
        }
    }).catch((errLivreur) => {
        res.json({
            message: "erreur connection",
            data: errLivreur,
            statusCode: 304
        });
    });

}
