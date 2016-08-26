(function(){
    var service = process.env.SERVICE || 'https://the-messenger-button.herokuapp.com';
    var timeout, kid, secret, message;
    _messengerDemo = function(options) {
        var element = options.element || document.body;
        var demo = options.demo || document.createElement('button');
        var text = options.text || 'Send to Messenger';
        message = options.message || 'THIS IS AN IMPORTANT MESSAGE';
        timeout = options.timeout || 5000;
        kid = options.kid;
        secret = options.secret;
        demo.onclick = button;
        demo.innerHTML = text;
        element.appendChild(demo);
    };

    function send() {
        // get userId
        Smooch.updateUser({})
            .then(function(value) {
                var data = {
                    id: value.appUser.userId || value.appUser._id,
                    message: message
                };
                if (secret && kid) {
                    data.kid = kid;
                    data.secret = secret;
                }
                superagent
                    .post(service + '/click')
                    .send(data)
                    .set('Content-Type', 'application/json')
                    .end(function(err) {
                        if (err) {
                            console.log('Error sending click', err);
                        }
                    });
            });
    }

    function button() {
        // wait for user to click on iframe
        window.onblur = function() {
            window.onblur = function(){};
            setTimeout(send, timeout);
        };
        document.getElementById('messenger').click();
        Smooch.open();
    }
})();
