import passport from "passport";
import passportJwt from "passport-jwt";
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
import * as dotenv from 'dotenv';

import User from "../model/userModel.js";
dotenv.config();

console.log(process.env.JWT_KEY)
passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY,
    },
    function (jwtPayload, done, req) {
        console.log(jwtPayload);
      return User.findById(jwtPayload.id)
      .then((user) => {
            console.log(user._id.valueOf(), jwtPayload.id);
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

export default passport;
