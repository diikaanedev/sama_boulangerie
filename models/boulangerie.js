const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Boulangerie = sequelize.define('boulangerie', {

    nomBoulangerie: { type: Sequelize.STRING},

    code: { type: Sequelize.STRING, unique: true } , 
    
    telephone: { type: Sequelize.STRING, unique: true } , 
    
    position: { type: Sequelize.STRING } , 

    mot_de_passe : {type : Sequelize.STRING , defaultValue:'sama-boulangerie'}

});

module.exports = Boulangerie;