const user = require("../models/user.model.js");
const taxDB = require("../models/tax.model.js");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user.model.js");

const getHomePage = async (req, res) => {
  try {
    return res.status(200).render("pages/home");
  } catch (error) {
    return res.status(404).render("error404");
  }
};

const getCalculateTaxPage = async (req, res) => {
  try {
    return res
      .status(200)
      .render("pages/calculate-tax");
  } catch (error) {
    return res.status(404).render("error404");
  }
};

const postCalculateTax = async (req, res) => {
  try {
    const { yearly_amount, year } = req.body;
    console.log(yearly_amount, year);
    const userid = req.user.id;
    console.log(userid);
    const user = await User.findById(userid);
    console.log(user);

    // return res.status(200).json({message:"testing"});
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found" });
    }

    // Define the tax calculation function
    function calculatetax(income, gender, age) {
      const taxFreeIncome =
        gender === "female" || age > 65
          ? 400000
          : 350000;

      let taxableIncome = income - taxFreeIncome;
      if (taxableIncome <= 0) {
        return 0; // No tax if income is below tax-free limit
      }

      let totalTax = 0;

      if (taxableIncome <= 100000) {
        totalTax = taxableIncome * 0.05;
      } else {
        totalTax += 100000 * 0.05;
        taxableIncome -= 100000;

        if (taxableIncome <= 300000) {
          totalTax += taxableIncome * 0.1;
        } else {
          totalTax += 300000 * 0.1;
          taxableIncome -= 300000;

          if (taxableIncome <= 400000) {
            totalTax += taxableIncome * 0.15;
          } else {
            totalTax += 400000 * 0.15;
            taxableIncome -= 400000;

            if (taxableIncome <= 500000) {
              totalTax += taxableIncome * 0.2;
            } else {
              totalTax += 500000 * 0.2;
              taxableIncome -= 500000;

              // Calculate the remaining tax at 25%
              totalTax += taxableIncome * 0.25;
            }
          }
        }
      }

      // Check if the user is eligible for the minimum tax
      const minimumTax =
        user.location === "Dhaka" ||
        user.location === "Chattogram"
          ? 5000
          : user.location === "otherCity"
          ? 4000
          : 3000;

      // Apply minimum tax if applicable
      totalTax = Math.max(minimumTax, totalTax);

      return totalTax;
    }

    // Determine the gender and age based on user information
    const gender = user.gender; // Assuming user.gender is "male" or "female"
    const age = user.age; // Assuming user.age is the user's age

    // Calculate the tax
    const taxAmount = calculatetax(
      yearly_amount,
      gender,
      age
    );

    //save them to the taxDB database
    const tax = new taxDB({
      nid: user.nid,
      year: year,
      yearly_amount: yearly_amount,
      taxable_amount: taxAmount,
    });

    if (year === user.year) {
      //remove data from database using userid
      await taxDB.deleteMany({ nid: user.nid });
      await tax.save();
    }

    console.log(taxAmount);
    //render to home page
    return res.status(200).render("pages/home");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: error.message });
  }
};

const getGenerateReportPage = async (
  req,
  res
) => {
  try {
    return res
      .status(200)
      .render("pages/generate-report");
  } catch (error) {
    return res.status(404).render("error404");
  }
};

const getGenerateReportInfo = async (
  req,
  res
) => {};

module.exports = {
  getHomePage,
  getCalculateTaxPage,
  postCalculateTax,
  getGenerateReportPage,
  getGenerateReportInfo,
};
