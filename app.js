const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const db = require('./config/db');

const app = express();

const path = require('path');

require('dotenv').config({
    path: './.env'
});

app.use(bodyParser.json({
    limit: '10000mb'
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10000mb'
}));

app.use(cors());

app.use('/static', express.static(path.join('.', 'files')));

/**
 * Import 
 */

const panierRouter = require('./routes/panier');

const livreurRouter = require('./routes/livreur');

/**
 * Use App
 */


app.use('/diikaandev/api/panier', panierRouter);

app.use('/diikaandev/api/livreur', livreurRouter);



db.sync({
    //force: true
}).then(_ => {

    app.listen(5004, () => {
        console.log('App listening on port 5004!');
    });

})