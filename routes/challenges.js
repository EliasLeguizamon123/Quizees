const Router  = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send('Hola Challenges');
});

router.get('/new', (req, res) => {
    res.send('Nuevo challenge');
});


module.exports = router;