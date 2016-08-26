'use strict';

const superagent = require('superagent');
const jwt = require('jsonwebtoken');

const kid = process.env.SMOOCH_KID;
const secret = process.env.SMOOCH_SECRET;
const token = jwt.sign({ scope: 'app' }, secret, { header: { kid } });

module.exports = data => new Promise((resolve, reject) => {
    const kid = data.kid || process.env.SMOOCH_KID;
    const secret = data.secret || process.env.SMOOCH_SECRET;
    const token = jwt.sign({ scope: 'app' }, secret, { header: { kid } });

    return superagent
        .post('https://app.smooch.io/v1/appusers/' + data.id + '/conversation/messages')
        .send({
            text: data.message,
            role: 'appMaker'
        })
        .set('authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .end((err, res) => err ? reject(err) : resolve(res.body));
});
