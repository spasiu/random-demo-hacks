Add a send to Messenger button for checkout pages.

ENDPOINTS:
- test: `https://the-messenger-button.herokuapp.com`
- script to include: `https://the-messenger-button.herokuapp.com/script.js`
- link: `https://the-messenger-button.herokuapp.com/link?kid=[key_id]&secret=[secret]&number=[phoneNumber]&id=[userId]`

example script use:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="main"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/superagent/2.2.0/superagent.min.js"></script>
    <script src="https://cdn.smooch.io/smooch.min.js"></script>
    <script src="/script.js"></script>
    <script>
        Smooch.init({ appToken: 'your_app_token', userId: 'jim'});
        _messengerDemo({
            element: document.getElementById('main'),
            timeout: 5000,
            text: 'Send to Messenger',
            message: 'This is an important message',
            kid: 'your_key_id',
            secret: 'your_secret'
        });
    </script>
</body>
</html>
```
smooch and superagent are dependencies.
