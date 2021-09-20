const hashes = require ('../routes/hashes');
const hashdetail= require('../routes/hashdetail');
const express = require ('express');
const app = express();
app.use(express.json());
app.get('/api/hashes/:timestamp', hashes);
app.get('/api/:hash', hashdetail);
const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`)});
