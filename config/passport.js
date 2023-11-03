const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/user.model');
const JwtStrategy = require('passport-jwt').Strategy;

passport.use(new JwtStrategy({
  secretOrKey: process.env._JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (payload, done) => {
  const user = await User.findById(payload.sub);
  if (user) {
    done(null, user);
  } 
  else {
    done(null, false);
  }
}));