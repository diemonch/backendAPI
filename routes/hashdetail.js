const axios = require('axios');
const express = require ('express');
const router= express.Router();


let block_detail=[];
 function getHashData (hash) {
  
  let url=`https://blockchain.info/rawblock/${hash}/`;
  return axios.get(url)
  .then(response => {
    
    block_detail.push({
      size:response.data.size,
      block_index:response.data.block_index,
      prev_block:response.data.prev_block
      

    });
  
    return block_detail;
  })
  .catch(error => {
    
    return Promise.reject(error);
  });
}


router.get('/api/:hash',(req,res) =>{
    
    
  getHashData(req.params.hash).then(response => {
  
      res.send(response);
      block_detail=[];  
    });
});

module.exports = router; 
  

