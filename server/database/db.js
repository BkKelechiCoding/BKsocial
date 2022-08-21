const express = require('express')
const mysql = require('mysql')


  const connection = mysql.createConnection({
     host : "localhost",
     user : "root",
     password : "Kingsley369",
     database : "formLogin"
 })

 connection.connect((err)=>{
     if (err){
         throw error
     }

     console.log("Database connected")

 })

module.exports = connection
