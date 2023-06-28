const express = require('express');
const db = require('../config/connection');
const bcrypt = require('bcrypt');
const {create, login, getOneuser} =require('../controller/user.controller')
const user = express.Router();
// user.get('/user', (req, res) => {
//     const q = "SELECT * FROM  user"
//     db.query(q, (err, data) => {
//         if (err) return res.json({ error: err, success: false })
//         else {
//             return res.json({
//                 list: data
//             })
//         }

//     })
// })
// user.post('/user', (req, res) => {
//     const q = "INSERT INTO user(`firstname`,`lastname`,`password`,`email`,`gender`)VALUES(?)"
//     const salt = 12
//     const hashpassword = bcrypt.hashSync(req.body.password, salt)
//     const values = [req.body.firstname, req.body.lastname, hashpassword, req.body.email, req.body.gender]
//     db.query(q, [values], (err, data) => {
//         if (err) return res.json({ error: err, success: false })
//         else {
//             return res.json({
//                 message: "successfully ",
//                 list: data
//             })
//         }
//     })

// })
user.post('/user',create)
user.get('/user',login)
user.get('/user/:id',getOneuser)
module.exports = user  