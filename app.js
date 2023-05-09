const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');
const hostname = '127.0.0.1';
const port = 80;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('kuch bhi');
})
app.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});