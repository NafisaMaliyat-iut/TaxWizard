const passport = require('passport');
const Customer = require('../models/customer.model');
const Manager = require('../models/manager.model');
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;

passport.use(new JwtStrategy({
  secretOrKey: process.env._JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (payload, done) => {
  const customer = await Customer.findById(payload.sub);
  const manager = await Manager.findById(payload.sub);
  if (customer) {
    done(null, customer);
  } 
  else if(manager){
    done(null, manager);
  }
  else {
    done(null, false);
  }
}));