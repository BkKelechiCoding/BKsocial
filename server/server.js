   const express = require('express')
   const cors = require('cors')
   const bcrypt = require('bcryptjs')
   const form = require('./router/routes')
   

   const app = express()

   const db = require("./database/db.js")


   const port = process.env.PORT || 8000
   app.use(cors())
   app.use(express.json())
   app.use(express.urlencoded({ extended: true }))

   app.get('/',(req,res)=>{
       res.send("A move to back end Programming")
   })

   app.use('/ok',form)
   

   app.listen(port,()=>{
       console.log(`server running on port${port}`)
   })