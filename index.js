const express = require('express')
const connection = require('./connection/connection')
const { postCompany, getCompany, deleteCompany, updateCompany, showLikeandDislike } = require('./controllers/companyController')
const { singIn, singUp } = require('./controllers/authController')
const { checkToken } = require('./middleware/verifyToken')
const app = express()
const port = 3000

connection()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET :  company data 
app.get('/', getCompany)

// POST : create company data  
app.post("/create", postCompany)

// PATCH : update company data 
app.patch("/update/:id", updateCompany)

// DELETE : delete company data 
app.delete("/delete/:id", deleteCompany)

// POST : Create User 
app.post("/create_user", singUp)

// POST : Login 
app.post("/login", singIn)

// POST : 
app.post("/showLikeandDislike", showLikeandDislike)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
