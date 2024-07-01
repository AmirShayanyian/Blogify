const router = require('express').Router();

router.get('/',(req,res,next)=>{
    return res.send({
        message:'Hi this is good'
    })
})
module.exports = {
  MainRouter: router,
};
