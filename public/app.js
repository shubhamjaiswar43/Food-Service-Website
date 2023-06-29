const express = require('express');
const app = express();
const path = require('path');
const hostname = '127.0.0.1';
const port = 80;
app.use(express.static(path.join(__dirname,'../')));
app.get('/', (req, res) => {
    res.send('Loading');
});
app.get('/order.html',(req,res)=>{
    res.send('Ruko Zara Sabar Karo!!!')
});
app.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});