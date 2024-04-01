const port = 3000;
const localIpAddress = "0.0.0.0"
import multer from 'multer'
const upload = multer({ dest: "uploads/" });

import fs from 'fs'


import express from 'express';
import notifier from 'node-notifier';
import ncp from 'copy-paste';
import open from 'open';

const app = express();

app.get('/', (req, res) => {
    const toCopy = req.query.text
    if (!toCopy) return res.send('Nothing to copy');
    if (toCopy.startsWith('http')) {
        open(toCopy);
        return res.send('Hello World!');
    }
    ncp.copy(toCopy, () => {
        console.log('Copied to clipboard!')
    })
    notifier.notify(`Successfully copied ${toCopy}`);
    res.send('Hello World!');
});

app.post('/file', upload.single('file'), (req, res) => {
    const file = req.file
    console.log(file.mimetype)
    res.send('dfj')
})

app.listen(port, localIpAddress, () => {

    console.log(`Listening: http://${localIpAddress}:${port}/?text=Hello`);

});