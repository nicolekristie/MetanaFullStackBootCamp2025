// import {client} from '../../src/main.js'
import express, { response } from "express";
const router = express.Router();
const app = express();
import argon2 from "argon2";
import validator from "validator";

// const app = express.Router();

app.use(express.json());

//creating an account

router.post("/create-account", async (req, res) => {
  const { username, email, password, role } = req.body; //request from the frontend

  //validate inputs
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email found" });
  }

  try {
    //checking if the user already exist
    const userExist = await Pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (userExist.rows.length > 0) {
      return res.status(400).json({ message: "User already exist" });
    }
    //hashing password
    const hashedpassword = await argon2.hash(password, 10);

    //inserting new user into the database
    const newuser = await Pool.query(
      "INSERT into users (username, email, password, role) Values ($1,$2,$3,$4) RETURNING *",
      [username, email, hashedpassword, role || "user"]
    );

    return res.status(201).json({ message: "User registered Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//Logging into account

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are Required" });
  }

  try {
    //retrieve email
    const user = await Pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: "User Doesn't Exist" });
    }
    //compare password
    // const isMatch = await argon2.compare(password, user.rows[0].password);
    const isMatch = await argon2.verify(user_password, user.rows[0].password);

    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credentials" });
    }

    //creating JWT token
    const token = jwt.sign(
      { userId: user.rows[0].id, role: user.rows[0].role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login Successfull", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

//authentication route

router.post("/api/auth", async (req, res) => {});

// useEffect(() => {
//     (async () => {
//       const isAuth = await isAuthenticated();
//       setIsAuth(isAuth);
//     },[])

export default router;
