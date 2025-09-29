const companySchema = require('../models/companyModel')

const getCompany = async (req, res) => {
    try {
        const data = await companySchema.find()
        if (data) {
            res.status(200).json({ data })
        }
    }
    catch (error) {
        res.status(500).json({ meesage: "Post Error " })
    }
}

const postCompany = async (req, res) => {
    const { name, date, companyName } = req.body
    try {
        const data = await companySchema.create({ name, date, companyName })
        if (data) {
            res.status(201).json({ meesage: "Post successfully " })
        }
    }
    catch (error) {
        res.status(500).json({ meesage: "Post Error" })
    }
}

const updateCompany = async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    try {
        const data = await companySchema.findByIdAndUpdate(id, updateData, { new: true })

        if (!data) {
            return res.status(500).json({ meesage: "Could not update " })
        }

        return res.status(200).json({ message: "Updated Successfully" })
    }
    catch (error) {
        return res.status(500).josn({ message: "Error", error: error.message })
    }
}
const deleteCompany = async (req, res) => {
    const { id } = req.params

    console.log("This is the id : ", id)
    try {
        const data = await companySchema.findByIdAndDelete(id)
        if (!data) {
            return res.status(500).json({ message: "Company not found" })
        }
        return res.status(200).json({ message: `Company with id ${id} deleted succesfully` })
    }
    catch (error) {
        res.status(500).json({ message: "Delete error", error: error.meesage })
    }
}
module.exports = { getCompany, postCompany, deleteCompany, updateCompany }
