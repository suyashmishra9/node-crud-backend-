const authSchema = require('../models/authModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const singUp = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const saltRounds = 10;

        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);

        await authSchema.create({ username, email, password: hash })
        return res.status(201).json({ message: "User created succesfully" })
    }
    catch (error) {
        return res.status(500).json({ message: "Error creating user ", error: error.message })
    }
}

const singIn = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await authSchema.findOne({ username })
        if (!user) {
            return res.status(401).json({ message: "User Not found " })
        }
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: "Password Incorrect" })
        }


        const token = jwt.sign({
            data: { username }
        }, 'secret', { expiresIn: '1h' });

        return res.status(200).json({ meesage: "Logged In Successfully", token })

    } catch (error) {
        return res.status(500).json({ message: "Error finding user ", error: error.message })

    }
}

module.exports = { singUp, singIn }
