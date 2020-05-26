
const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Produit = sequelize.define('produit', {

    nomCategorie: { type: Sequelize.STRING, unique: true },

    code: { type: Sequelize.STRING, unique: true },

    imgProduit : { type: Sequelize.STRING},

    prixProduit : {type: Sequelize.STRING },

    
});

module.exports = Produit;