const authSchema = require('../models/authModel')
const companySchema = require('../models/companyModel')

const testingPipleline = async (req, res) => {
    try {
        const data = await companySchema.find({ name : { $regex: 'Suyash', $options: 'i' } }
)
return res.status(200).json({ data })
    } catch (error) {
    return res.status(500).json({ message: error })
}
}

module.exports = { testingPipleline }