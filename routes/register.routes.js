const route=require('express').Router();

const getRegister=async(req,res)=>{
    try{
        return res.status(200).render('pages/register');
    }
    catch(error){
        return res.status(404).render('error404');
    }
}

route.get('/register',getRegister);


module.exports=route;