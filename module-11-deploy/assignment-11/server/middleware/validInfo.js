export default async (req, res, next) => {
    //destructure email, name and pwd
    console.log("entered the middleware....")
    const { user_email, user_name, user_password } = req.body;
  
    //check if email is valid
    function validEmail(user_email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user_email);
    }
  
    if (req.path === "/register") {
      console.log(!user_email.length);
      //check if fields are empty
      if (![user_email, user_name, user_password].every(Boolean)) {
        console.log("entered no email")
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(user_email)) {
        console.log("not valid email")
        return res.status(401).json("Invalid Email");
      }
    } else if (req.path === "/login") {
      if (![user_email, user_password].every(Boolean)) {
        console.log('entered login validation....')
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(user_email)) {
        return res.status(401).json("Invalid Email");
      }
    }
  
    next();
  };

