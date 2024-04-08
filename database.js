import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()

export async function Signup(username,email,password){
    if(checkemail(email)){
        console.log("Already Exists!");
        return;
    }
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 10);
    }
    catch (err) {
        console.log("NO hashing!")
    }
    console.log(hashedPassword);
    const result  = await pool.query(`
    INSERT INTO users (username, email, pass_word)
    VALUES (?, ?, ?)
    `, [username, email, hashedPassword])
    return result
}

export async function Login(username,email,password){
    const user = await getemail(email);
    console.log(user);
    if(username!=user.username){
        console.log("username not matching!")
        return;
    }
    if(bcrypt.compare(password,user.pass_word)){
        console.log("Logged in sucessfully.")
        return;
    }
}

export async function checkemail(email){
    const result = await pool.query(`SELECT EXISTS (SELECT email FROM users WHERE email = ? )`,[email])
    return result
}

export async function getemail(email){
    const result = await pool.query(`SELECT email, username, pass_word FROM users WHERE email = ?`,[email])
    return result[0][0]
}


//const note = await Login("Parv","nomail","12345678");

//console.log(note)

