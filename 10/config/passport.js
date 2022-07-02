const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../model/User");

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'secret';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.data, (err, user) => {
            if (err) {
                return done(err, false); // no next()
            }

            if (user) {
                return done(null, user); // next()
            } else {
                return done(null, false); // no next()
            }
        });
    }));
}