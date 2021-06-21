const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hola sing up');
});

router.post('/', (req,res)=>{
    res.send('ok saved')
})

module.exports = router;