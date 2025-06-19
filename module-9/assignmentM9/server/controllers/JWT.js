import jsonwebtoken from 'jsonwebtoken'


//create a token and set the token to the user's browser
export const createTokens = (user) => {
    const accessToken = sign(
        {username: user.username, id: user.id},
         "jwtsecretplschange"
        );    //pass in a secret to keep token secure and expiration date

        return accessToken
};

//create middleware


//user res to access token
export const validateToken = (req, res, next) => {
    const accessToken = req.cooies["access-token"]
    if (!accessToken) 
        return res.status(400).json({error: "User Not authentication"});

    //check if the token is valid -verify function from jsonwebtoken
    try{
        const validToken = verify(accessToken, "jwtsecretplschange")
        if (validToken) {
            req.authenticated = true    //access it in any request that middleware is applied)
            return next()
        }

    } catch(err) {
        return res.status(400).json({error: err})
    }

}