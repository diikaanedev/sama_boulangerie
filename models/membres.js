
const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Produit = sequelize.define('produit', {

    nomComplet: { type: Sequelize.STRING, },

    telephone: { type: Sequelize.STRING, unique: true },
    
});

module.exports = Village;