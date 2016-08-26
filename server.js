'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const clickHandler = require('./lib/click');
const linkHandler = require('./lib/link');

express()
    .use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(bodyParser.json())

    .get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
    .get('/script.js', (req, res) => res.sendFile(__dirname + '/script.js'))

    .get('/link', (req, res) => linkHandler(req.query)
        .then(val => res.status(200).json(val))
        .catch(err => res.status(err.status || 500).send(err)))

    .post('/click', (req, res) => clickHandler(req.body)
        .then(val => res.status(200).json(val))
        .catch(err => res.status(err.status || 500).send(err)))

    .listen(process.env.PORT || 8888);
