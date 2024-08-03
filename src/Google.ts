import GoogleStrategy from "passport-google-oauth2"
import passport from "passport";
import cred from "./client_secret.json";


export const strategy: GoogleStrategy.Strategy = new GoogleStrategy.Strategy({
    clientID: cred.client_id,
    clientSecret: cred.client_secret,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
},() => {});