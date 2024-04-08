//Project for CS260 DataBase Lab
// Roll no :-- 2201CS91, 2201CS74

import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import cors from 'cors'
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function Signup(firstname,lastname,email,category,password,repassword){
    let val = await checkemail(email)
    //console.log(val,password);
    if(val){
        console.log("Already Exists!");
        return {"success":false,"message":"Already Exists!"};
    }
    let resu = password.localeCompare(repassword);
    if(resu!=0){
        console.log("Second Password doesn't match.");
        return {"success":false,"message":"Second Password doesn't match."};
    }
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 10);
    }
    catch (err) {
        console.log("NO hashing!")
        return {"success":false,"message":"NO hashing!"};
    }
    //console.log(hashedPassword);
    const result  = await pool.query(`
    INSERT INTO iitpatna (firstname, lastname, email, category, pass_word)
    VALUES (?, ?, ?, ?, ?)
    `, [firstname, lastname, email, category, hashedPassword])
    return {"success":true,"message":"Account Created Sucessfully!"};
}

async function Login(email,password){
    let val = await checkemail(email)
    //console.log(val,password);
    if(!val){
        console.log("User doesn't Exists!");
        return {"success":false,"message":"User doesn't Exists!"};
    }
    const user = await getemail(email);
    const ans = await bcrypt.compare(password,user.pass_word)
    //console.log(ans)
    if(ans){
        console.log("Logged in sucessfully.")
        return {"success":true,"message":"Sucessfully Logged in."};
    }
    else{
        return {"success":false,"message":"Incorrect Password."};
    }
}

async function checkemail(email){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT email FROM iitpatna WHERE email = ? )`,[email])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function getemail(email){
    const result = await pool.query(`SELECT pass_word FROM iitpatna WHERE email = ?`,[email])
    return result[0][0]
}

app.listen(process.env.PORT,(req,res)=>{
    console.log("Server started.")
})

app.post('/login',async (req,res)=>{
    //console.log(req.body)
    const {email,password} = req.body;
    const response = await Login(email,password);
    //console.log(response.message)
    const r = JSON.stringify(response)
    //console.log(r)
    res.send(r);
})

app.post('/signup',async (req,res)=>{
    console.log(req.body)
    const {firstname,lastname,email,category,password,repassword} = req.body;
    //console.log(password,repassword);
    const response = await Signup(firstname,lastname,email,category,password,repassword);
    console.log(response);
    res.send(response);
})



