const bcrypt = require('bcrypt')
const db = require('../config/connection')


const create = (req, res) => {
    const q = "INSERT INTO user(`firstname`,`lastname`,`password`,`email`,`gender`)VALUES(?)"
    const salt = 10
    const hashpassword = bcrypt.hashSync(req.body.password, salt)
    const value = [req.body.firstname, req.body.lastname, hashpassword, req.body.email, req.body.gender]
    db.query(q, [value], (err, data) => {
        if (err) {
            return res.json({
                error: err,
                success: false
            })
        }else if(data.lenght){
            return res.json({
                error: err,
                message: "user already exits"
            })
        }
        else {
            return res.json({
                message: "successfully",
                list: data
            })
        }
    })
}
const login = (req, res) => {
    const q = "SELECT * FROM  user"
        db.query(q, (err, data) => {
            if (err) return res.json({ error: err, success: false })
            else {
                return res.json({
                    list: data
                })
            }
    
        })
}
const getOneuser=(req,res)=>{
    const q=`SELECT * FROM user where id=?`
    const id=req.params.id
    db.query(q,[id],(err,data)=>{
        if(err){
            return res.json({   success:false, message:'error connection' })
        }
        else{
            return res.json({
                list:data
            })
        }
    })
}

module.exports = { create, login,getOneuser }