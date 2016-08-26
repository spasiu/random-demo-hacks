'use strict';

const superagent = require('superagent');
const jwt = require('jsonwebtoken');

module.exports = data => new Promise((resolve, reject) => {
    const kid = data.kid || process.env.SMOOCH_KID;
    const secret = data.secret || process.env.SMOOCH_SECRET;
    const token = jwt.sign({ scope: 'app' }, secret, { header: { kid } });

    return superagent
        .post('https://app.smooch.io/v1/appusers/' + data.id + '/channels')
        .send({
            type: 'twilio',
            phoneNumber: '+1' + data.number
        })
        .set('authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .end((err, res) => err ? reject(err) : resolve(res.body));
});
