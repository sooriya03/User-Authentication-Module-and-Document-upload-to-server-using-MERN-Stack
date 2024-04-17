const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const UserModel = require('./models/user')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Sooriya:$Ooriya2k3@cluster0.mi2tzcd.mongodb.net/User");

app.post('/login', (req ,res) => {
    const {email,password} = req.body;
    UserModel.findOne({email: email})
    .then(Test => {
        if(Test){
            if(Test.password === password){
                res.json("Success")
            }
            else
            {
                res.json("Password is Incorrect")
            }
        }
        else
        {
            res.json("No User Existed")
        }
    })
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if(name && email && password)
    {
        res.json("Success")
    }

    if (!name || !email || !password) {
         res.status(400).json({error:"All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
         res.status(400).json({error:"Invalid email format" });
    }

    UserModel.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

const storage = multer.diskStorage({

    destination: function (req,file,cb)  {
        return cb(null, 'Public/Cases')
    },
    filename: function(req, file, cb){
        return cb(null, `${file.originalname}`)
    }

})

const upload = multer({storage})
app.post('/upload', upload.single('file'), (req, res) => {

    console.log(req.body)
    console.log(req.file)
    if(req.file){
        res.json('Success')
    }
    else if(!req.file)
    {
        res.status(400).json('Select File')
    }
    
})

app.listen(3001, () => {
    console.log("Server is running")
})