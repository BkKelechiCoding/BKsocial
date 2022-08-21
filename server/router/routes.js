const express = require('express')
const router = express.Router()
const db = require("../database/db.js")



router.post('/do',(req,res)=>{
    
  console.log(req.body)


    const email = req.body.email;
    const password = req.body.password;
    const sql = `INSERT INTO login (email,passworld) VALUES ("${email}","${password}")`
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }

        console.log(' 1 record inserted')
    })

})

router.post('/dom',(req,res)=>{
   console.log(req.body)

   const user = req.body.user;
   const email1 = req.body.email1;
    const password2= req.body.password2;
    const sql = `INSERT INTO userLoginDetail (user,emaill,product) VALUES ("${user}","${email1}","${password2}")`
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }

        console.log(' 1 record inserted')
    })
})


module.exports = router;