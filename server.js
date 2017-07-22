const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

app.get('/login', function(req, res) {
res.redirect('https://lucidwebblog.auth0.com/login?client=aNNJJ3d1siwKE-8cp2p8o8ylKDlT6boI');
});

app.listen(port, () => {
  console.log("App is listening on " + port);
});
