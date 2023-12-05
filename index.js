const port = 8080;
const localIpAddress = "0.0.0.0"


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

app.listen(port, localIpAddress, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://${localIpAddress}:${port}`);
    /* eslint-enable no-console */
});