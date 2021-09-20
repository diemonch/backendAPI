const axios = require('axios');
const express = require ('express');
const router= express.Router();
var today = new Date() -1
var defaulTimeStamp= today.valueOf();

function getHashMainBlocks (timestamp) {
  
  let url=`https://blockchain.info/blocks/${timestamp}?format=json`;
  return axios.get(url)
  .then(response => {
    return response.data;
    
  })
  .catch(error => {
    //console.log(error);
    return Promise.reject(error);
  }); 
}

  router.get('/api/hashes/:timestamp',(req,res) =>{
   
    let ts = !req.params.timestamp ? defaulTimeStamp : req.params.timestamp;
    getHashMainBlocks(ts).then(response => {
        res.send(response);
        block_detail=[];  
      });
});

module.exports = router; 