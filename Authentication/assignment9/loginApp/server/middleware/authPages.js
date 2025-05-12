//create 2 functions to run before each request

//pass in the permissions
const  authPage = (permissions) => {
    return (req, res, next) => {
        const userRole = req.body.user_role;
        if (permissions.includes(userRole)) {
            console.log("user was an admin")
            next();
        }else {
            return res.status(401).json("You don't have permission!")
        }
    }


};

export default authPage;