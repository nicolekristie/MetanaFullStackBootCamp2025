import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

//using middleware to authorize a person
//before it hits the routes it will get access to the req res>if ok>continue with the process of next to keep going with the routes

export default async (req, res, next) => {
  try {

    //get token from the fetch request (headers)
    const jwtToken = req.header("token");
    // console.log(`jwtToken ${jwtToken}`);

    //check whether the token exist
    // console.log(`jwt: ${jwtToken}`)
    if (!jwtToken) {
      return res.status(403).json("Not Authorized");
    }
    //if there is a token>check whether token is valid
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
    console.log(`secret ${process.env.JWT_SECRET}`);

    console.log(`payload: ${payload.user}`)
    req.user = await payload.user;
    console.log (`res: ${res.user} req: ${req.user}`)
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not --- Authorized");
  }
};
