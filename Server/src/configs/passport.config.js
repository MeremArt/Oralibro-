const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserService = require('../services/user.services');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

passport.use(
    new GoogleStrategy({
        // options for the strategy
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: `https://oralibro.onrender.com/api/v1/auth/google/callback`,
        passReqToCallback: true
    },
        async (request, accessToken, refreshToken, profile, done) => {
            // pass call back function: search for existing profile on db
            await UserService.find({ googleId: profile.id }).then(async (existingUser) => {
                if (existingUser) {
                    // Already have the user
                    done(null, existingUser);
                } else {
                    await UserService.create({
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        name: profile.name.displayName,
                    }).then((newUser) => {
                        return done(null, newUser);
                    })
                }
            })
        }
    ));

// Serialize user and store in cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    UserService.find({_id : id}).then((user) => {
        return done(null, user);
    }).catch((err) => {
        return done(err);
      });
});