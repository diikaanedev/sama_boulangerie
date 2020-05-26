const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Livreur = sequelize.define('livreur', {

    nom: { type: Sequelize.STRING, },

    code: { type: Sequelize.STRING, unique: true },

    telephone: { type: Sequelize.STRING, unique: true },

    position: { type: Sequelize.STRING },

    mot_de_passe: { type: Sequelize.STRING , defaultValue : 'sama-boulangerie' },


});

module.exports = Livreur;