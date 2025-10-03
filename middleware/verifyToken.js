var jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const header = req.headers.authorization
    const token = header.split(" ")
    try {
        var decoded = jwt.verify(token[1], 'secret');
        console.log(decoded)
        if (decoded) {
            next()
        }
    } catch (err) {
        return res.status(401).json({ message: "Token Not Found" })

    }
}
module.exports = { checkToken }