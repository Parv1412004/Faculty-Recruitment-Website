const express = require('express');
const urlencoded = express.urlencoded;
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const multer = require('multer');
const puppeteer = require('puppeteer');
const {PDFDocument} = require('pdf-lib');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null, "./uploads");
    },
    filename: function(req,file,cb){
        return  cb(null,`${file.originalname}`)
    }
})
const upload  = multer({storage})
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
        const name = await getName(email);
        console.log(name);
        console.log("Logged in sucessfully.")
        return {"success":true,"message":"Sucessfully Logged in.","user":email,"firstName":name.firstname,"lastName":name.lastname};
    }
    else{
        return {"success":false,"message":"Incorrect Password."};
    }
}


async function getName(email) {
    const result = await pool.query(
        `SELECT firstname, lastname FROM iitpatna WHERE email = ?`, 
        [email]
    );
    //console.log(result[0][0].firstname);
    const { firstname, lastname } = result[0][0];
    //console.log(firstname,lastname)
    return { exists: true, firstname, lastname };
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

async function checkemail1(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page1data WHERE jwt_token = ? )`,[token])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function checkemail2(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page2data WHERE jwt_token = ? )`,[token])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function checkemail3(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page3data WHERE jwt_token = ? )`,[token])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function checkemail4(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page4data WHERE jwt_token = ? )`,[token])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function checkemail5(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page5data WHERE jwt_token = ? )`,[token])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function checkemail6(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page6data WHERE jwt_token = ? )`,[token])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function checkemail8(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page8data WHERE jwt_token = ? )`,[token])
    for (var key in result[0][0]) {
        var value = result[0][0][key];
    }
    //console.log(value)
    return value
}

async function checkemail8_2(token){
    //console.log(email)
    const result = await pool.query(`SELECT EXISTS (SELECT jwt_token FROM page8file WHERE jwt_token = ? )`,[token])
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

async function storepage1(token,bdy){
    const res = await checkemail1(token)
    if(res){
        await pool.query(`UPDATE page1data
        SET data = ?
        WHERE jwt_token = ?`,[bdy,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page1data (jwt_token, data)
    VALUES (?, ?)
    `, [token, bdy])
    return {"success":true,"message":"Created Successfully."}; 
}

async function storepage2(token,bdy){
    const res = await checkemail2(token)
    if(res){
        await pool.query(`UPDATE page2data
        SET data = ?
        WHERE jwt_token = ?`,[bdy,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page2data (jwt_token, data)
    VALUES (?, ?)
    `, [token, bdy])
    return {"success":true,"message":"Created Successfully."}; 
}

async function storepage3(token,bdy){
    const res = await checkemail3(token)
    if(res){
        await pool.query(`UPDATE page3data
        SET data = ?
        WHERE jwt_token = ?`,[bdy,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page3data (jwt_token, data)
    VALUES (?, ?)
    `, [token, bdy])
    return {"success":true,"message":"Created Successfully."}; 
}

async function storepage4(token,bdy){
    const res = await checkemail4(token)
    if(res){
        await pool.query(`UPDATE page4data
        SET data = ?
        WHERE jwt_token = ?`,[bdy,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page4data (jwt_token, data)
    VALUES (?, ?)
    `, [token, bdy])
    return {"success":true,"message":"Created Successfully."}; 
}

async function storepage5(token,bdy){
    const res = await checkemail5(token)
    if(res){
        await pool.query(`UPDATE page5data
        SET data = ?
        WHERE jwt_token = ?`,[bdy,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page5data (jwt_token, data)
    VALUES (?, ?)
    `, [token, bdy])
    return {"success":true,"message":"Created Successfully."}; 
}

async function storepage6(token,bdy){
    const res = await checkemail6(token)
    if(res){
        await pool.query(`UPDATE page6data
        SET data = ?
        WHERE jwt_token = ?`,[bdy,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page6data (jwt_token, data)
    VALUES (?, ?)
    `, [token, bdy])
    return {"success":true,"message":"Created Successfully."}; 
}

async function storepage8(token,bdy){
    const res = await checkemail8(token)
    if(res){
        await pool.query(`UPDATE page8data
        SET data = ?
        WHERE jwt_token = ?`,[bdy,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page8data (jwt_token, data)
    VALUES (?, ?)
    `, [token, bdy])
    return {"success":true,"message":"Created Successfully."}; 
}

async function storepage8_2(token,filename,name){
    //console.log(token,filename,name);
    const res = await checkemail8_2(token)
    if(res){
        await pool.query(`UPDATE page8file
        SET ${name} = ?
        WHERE jwt_token = ?`,[filename,token])
        return {"success":true,"message":"Updated Successfully."}; 
    }
    await pool.query(`
    INSERT INTO page8file (jwt_token,${name})
    VALUES (?, ?)
    `, [token, filename])
    return {"success":true,"message":"Created Successfully."}; 
}

async function getpage1(token,bdy){
    const res = await checkemail1(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT data FROM page1data WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    return result; 
}

async function getpage2(token,bdy){
    const res = await checkemail2(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT data FROM page2data WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    return result; 
}


async function getpage3(token,bdy){
    const res = await checkemail3(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT data FROM page3data WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    return result; 
}

async function getpage4(token,bdy){
    const res = await checkemail4(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT data FROM page4data WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    return result; 
}

async function getpage5(token,bdy){
    const res = await checkemail5(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT data FROM page5data WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    return result; 
}

async function getpage6(token,bdy){
    const res = await checkemail6(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT data FROM page6data WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    return result; 
}

async function getpage8(token,bdy){
    const res = await checkemail8(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT data FROM page8data WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    return result; 
}

async function getpage8_2(token,name){
    const res = await checkemail8_2(token)
    if(!res){
        return {"success":false,"message":"No data."}; 
    }
    let result = await pool.query(`
    SELECT ${name} FROM page8file WHERE jwt_token = ?`, [token])
    result["sucess"] = true;
    console.log(result);
    return result; 
}




app.listen(process.env.PORT,(req,res)=>{
    console.log("Server started.")
})

// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }))

app.post('/login',async (req,res)=>{
    //console.log(req.body)
    const {email,password} = req.body;
    const response = await Login(email,password);
    //console.log(session.user);

    const r = JSON.stringify(response)
    //console.log(r)
    res.send(r);
})

app.post('/signup',async (req,res)=>{
    //console.log(req.body)
    const {firstname,lastname,email,category,password,repassword} = req.body;
    //console.log(password,repassword);
    const response = await Signup(firstname,lastname,email,category,password,repassword);
    console.log(response);
    res.send(response);
})

app.post('/datapage1',async (req,res)=>{
    //console.log(req.body)
    const data = JSON.stringify(req.body);
    //let togetuser = await data.json();
    //console.log(req.body["User"])
    const response = await storepage1(req.body["User"],data);
    //console.log(response);
    res.send(response);
})

app.post('/datapage2',async (req,res)=>{
    //console.log(req.body)
    const data = JSON.stringify(req.body);
    //let togetuser = await data.json();
    //console.log(req.body["User"])
    const response = await storepage2(req.body["User"],data);
    //console.log(response);
    res.send(response);
})

app.post('/datapage3',async (req,res)=>{
    //console.log(req.body)
    const data = JSON.stringify(req.body);
    //let togetuser = await data.json();
    //console.log(req.body["User"])
    const response = await storepage3(req.body["User"],data);
    //console.log(response);
    res.send(response);
})

app.post('/datapage4',async (req,res)=>{
    //console.log(req.body)
    const data = JSON.stringify(req.body);
    //let togetuser = await data.json();
    //console.log(req.body["User"])
    const response = await storepage4(req.body["User"],data);
    //console.log(response);
    res.send(response);
})

app.post('/datapage5',async (req,res)=>{
    //console.log(req.body)
    const data = JSON.stringify(req.body);
    //let togetuser = await data.json();
    //console.log(req.body["User"])
    const response = await storepage5(req.body["User"],data);
    //console.log(response);
    res.send(response);
})

app.post('/datapage6',async (req,res)=>{
    //console.log(req.body)
    const data = JSON.stringify(req.body);
    //let togetuser = await data.json();
    //console.log(req.body["User"])
    const response = await storepage6(req.body["User"],data);
    //console.log(response);
    res.send(response);
})

app.post('/datapage8',async (req,res)=>{
    //console.log(req.body)
    const data = JSON.stringify(req.body);
    //let togetuser = await data.json();
    //console.log(req.body["User"])
    const response = await storepage8(req.body["User"],data);
    //console.log(response);
    res.send(response);
})

app.post('/getdatapage1',async (req,res)=>{
    let result = await getpage1(req.body["User"]);
    //console.log(result);
    if(result["sucess"]){
        result = result[0][0]
        result["sucess"] = true;
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})

app.post('/getdatapage2',async (req,res)=>{
    //console.log(req.body);
    let result = await getpage2(req.body["User"]);
    //console.log(result[0][0]);
    if(result["sucess"]){
        result = result[0][0]
        result["sucess"] = true;
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})

app.post('/getdatapage3',async (req,res)=>{
    let result = await getpage3(req.body["User"]);
    //console.log(result);
    if(result["sucess"]){
        result = result[0][0]
        result["sucess"] = true;
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})

app.post('/getdatapage4',async (req,res)=>{
    let result = await getpage4(req.body["User"]);
    //console.log(result);
    if(result["sucess"]){
        result = result[0][0]
        result["sucess"] = true;
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})

app.post('/getdatapage5',async (req,res)=>{
    let result = await getpage5(req.body["User"]);
    //console.log(result);
    if(result["sucess"]){
        result = result[0][0]
        result["sucess"] = true;
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})

app.post('/getdatapage6',async (req,res)=>{
    let result = await getpage6(req.body["User"]);
    //console.log(result);
    if(result["sucess"]){
        result = result[0][0]
        result["sucess"] = true;
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})

app.post('/getdatapage8',async (req,res)=>{
    let result = await getpage8(req.body["User"]);
    //console.log(result);
    if(result["sucess"]){
        result = result[0][0]
        result["sucess"] = true;
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})


app.use(express.urlencoded({extended:false}))

app.post("/upload", upload.fields([
    { name: '1'},
    { name: '3'},
    { name: '4'},
    { name: '5'},
    { name: '6'},
    { name: '7'},
    { name: '8'},
    { name: '9'},
    { name: '10'},
    { name: '11'},
    { name: '12'}
  ]), async (req,res)=>{
    let sucess = true;
    //console.log(req.files["1"])
    if(req.files["1"]!=null){
        console.log('f1')
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["1"][0].originalname,"f1");
        //console.log(respo["success"]);
        if(respo["success"]!==true){
            console.log('f')
            sucess=false;
        }
    }
    if(req.files["3"]!=null){
        console.log('f3')
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["3"][0].originalname,"f3");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["4"]!=null){
        console.log('f4')
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["4"][0].originalname,"f4");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["5"]!=null){
        console.log('f5')
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["5"][0].originalname,"f5");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["6"]!=null){
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["6"][0].originalname,"f6");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["7"]!=null){
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["7"][0].originalname,"f7");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["8"]!=null){
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["8"][0].originalname,"f8");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["9"]!=null){
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["9"][0].originalname,"f9");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["10"]!=null){
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["10"][0].originalname,"f10");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["11"]!=null){
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["11"][0].originalname,"f11");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    if(req.files["12"]!=null){
        //console.log(req.files["1"][0].originalname);
        let respo = await storepage8_2(req.body["user"],req.files["12"][0].originalname,"f12");
        //console.log(respo);
        if(respo["sucess"]!==true){
            sucess=false;
        }
    }
    let respo = {"success":true};
    respo = JSON.stringify(respo);
    res.send(respo);
})

app.post('/view',async (req,res)=>{
    //console.log(req.body);
    let result = await getpage8_2(req.body["user"],"f".concat(req.body["part"]));
    //console.log(result);
    //console.log(result[0][0]);
    if(result["sucess"]){
        result = result[0][0]
        if(result["f".concat(req.body["part"])]!=null) result["sucess"] = true;
        else result["sucess"] = false;
        //console.log(result);
        result = JSON.stringify(result);
        res.send(result)
    }
    else{
        result = JSON.stringify(result);
        res.send(result)
    }
})


async function generatePDFfromMultipleURLs(urls, outputPath) {
    const browser = await puppeteer.launch();
    let combinedPDFBuffer = [];
  
    for (let url of urls) {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2' });
      const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
      combinedPDFBuffer.push(pdfBuffer);
      await page.close();
    }
  
    // Combine all PDF buffers
    const pdfDoc = await PDFDocument.create();
    for(let pdfBuffer of combinedPDFBuffer) {
      const pdfBytes = new Uint8Array(pdfBuffer);
      const tempPDFDoc = await PDFDocument.load(pdfBytes);
      const copiedPages = await pdfDoc.copyPages(tempPDFDoc, tempPDFDoc.getPageIndices());
      copiedPages.forEach((page) => pdfDoc.addPage(page));
    }
    const mergedPdfFile = await pdfDoc.save();
  
    require('fs').writeFileSync(outputPath, mergedPdfFile);
    await browser.close();
    let respo = {"success":true}
    return respo;
}

app.post('/pdf',async (req,res)=>{
    const urls = [`http://127.0.0.1:${req.body["port"]}/page1.html`, `http://127.0.0.1:${req.body["port"]}/page2.html`, `http://127.0.0.1:${req.body["port"]}/page3.html`,`http://127.0.0.1:${req.body["port"]}/page4.html`,`http://127.0.0.1:${req.body["port"]}/page5.html`,`http://127.0.0.1:${req.body["port"]}/page6.html`];
    let respo = await generatePDFfromMultipleURLs(urls, 'application.pdf')
    console.log('PDF generated successfully')
    console.log(respo);
    respo = JSON.stringify(respo) 
    console.log(respo);
    res.send(respo);
})

