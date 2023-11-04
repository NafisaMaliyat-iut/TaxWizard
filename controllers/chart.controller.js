const Tax = require("../models/tax.model");
const User = require("../models/user.model")

const getChartData=async(req,res)=>{
    try{
        const data=await User.findById(req.user.id);
        const taxData=await Tax.find({nid:data.nid}).select("yearly_amount taxable_amount year");
        res.status(200).json(taxData);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const getChartPage = async (req, res) => {
    try {
      return res.status(200).render("pages/view-chart");
    } catch (error) {
      return res.status(404).render("error404");
    }
  };

module.exports={getChartData, getChartPage};