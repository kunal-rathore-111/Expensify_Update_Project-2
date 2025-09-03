// dependencies
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth20").Strategy;

//files
const { usersModel } = require("../models/Models");

passport.use(
    new OAuth2Strategy
        (
            {
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: process.env.CALLBACK_URL  // need to change for domain when deploying
            },

            async (accessToken, refreshToken, profile, done) => {
                try {
                    let user = await usersModel.findOne({ email: profile.emails[0].value });
                    if (!user)// store in db
                    {
                        user = await usersModel.create({
                            username: profile.displayName,
                            email: profile.emails[0].value,
                            profileUrl: profile.photos[0].value
                        });

                        done(null, user); // after store send the user data to passport, to create session
                    }
                    else {  // else user already exists send the user data to passport, to create session
                        done(null, user);
                    }
                } catch (error) {
                    done(error, null); // if any kind of error send the error to passport
                }
            }

        ));



passport.serializeUser((user, done) => {
    console.log("serializing user");
    done(null, user); // if we have large usersModel then we use some attributes not complete user for generating session 
});

passport.deserializeUser((user, done) => {
    console.log("Deserializing user");
    done(null, user); // if in serialize we user some attributes instead the whole user then we need to find in db full data of that user, and also need error handling
});