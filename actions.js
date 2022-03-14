const express = require('express');
const router = express.Router();

router.get('/greeting', (request,respous) => {

    return respous.status(200).json({
        massage:'Welcome to my API'
    });
});
router.get('/mult',(request,respous)=>{
    return respous.status(200).json({
       message:10*10
    });
});


module.exports=router;