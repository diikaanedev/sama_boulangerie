const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Categorie = sequelize.define('cathegorie', {

    nomCategorie: { type: Sequelize.STRING, unique: true },

    code: { type: Sequelize.STRING, unique: true } , 

});

module.exports = Categorie;