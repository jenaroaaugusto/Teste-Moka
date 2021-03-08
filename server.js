const express = require('express');
const compression = require('compression')
const path = require('path');

const app = express();
app.use(compression())

// Serve only the static files form the dist directory
app.use(express.static('./dist/my-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-app/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);