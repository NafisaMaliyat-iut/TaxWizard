const route=require('express').Router();

const welcome=async(req,res)=>{
    try{
        return res.status(200).render('pages/index');
    }
    catch(error){
        return res.status(404).render('error404');
    }
}

route.get('/',welcome);


module.exports=route;