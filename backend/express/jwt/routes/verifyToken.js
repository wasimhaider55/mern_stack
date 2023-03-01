const jwt = require("jsonwebtoken");
function verifyToken (req, res, next ) {

    const token = req.header("auth-token");
    if(!token) return res.status(400).send("token not found");
    try {
        const verify = jwt.verify(token, process.env.TOKEN_SECRET);
        next(); 
    } catch (error) {
        res.status(400).send(error);    
    }
}

module.exports = verifyToken ;