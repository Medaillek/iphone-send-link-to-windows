const express = require('express');
const notifier = require('node-notifier');
const ncp = require("copy-paste");

const app = express();

app.get('/', (req, res) => {
    const toCopy = req.query.text
    ncp.copy(toCopy, () => {
        console.log('Copied to clipboard!')
    })
    notifier.notify(`Successfully copied ${toCopy}`);
    res.send('Hello World!');
});

const port = process.env.PORT || 8080;
app.listen(port, '192.168.1.10', () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});