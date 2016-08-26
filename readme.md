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
        Smooch.init({ appToken: '8hncffsdu67efgklhf803ri8xzcd9', userId: 'jim'});
        _messengerDemo({
            element: document.getElementById('main'),
            timeout: 5000,
            text: 'Send to Messenger',
            message: 'This is an important message',
            kid: 'app_57bfbksdfkjdfsfjsdhfsd',
            secret: 'jsdlfihfsdlihsfd_NA5oLLtI-wj'
        });
    </script>
</body>
</html>
```
smooch and superagent are dependencies.
