
const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Panier = sequelize.define('panier', {

    nomClient: { type: Sequelize.STRING },

    telephoneClient: { type: Sequelize.STRING },

    adresseClient: {type : Sequelize.STRING , defaultValue:''},

    produits : { type: Sequelize.TEXT },

    boulangerie:{ type: Sequelize.TEXT },

    prixTotal : {type: Sequelize.STRING },

    choixLivraison : {type : Sequelize.STRING} , 

    type_paiement : {type : Sequelize.STRING},

    validationCmd : {type : Sequelize.TINYINT , defaultValue :'1'},
    
    paieCmd : {type : Sequelize.STRING , defaultValue :'1'},

    validPaiement : {type : Sequelize.STRING , defaultValue :'1'},

    statusLivraison : {type : Sequelize.STRING  , defaultValue : '1'} ,

    livreurCode : {type : Sequelize.STRING , defaultValue:''}
    
});

module.exports = Panier;