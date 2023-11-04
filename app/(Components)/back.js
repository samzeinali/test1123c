import express from "express";
import mysql from "mysql";
import cors from "cors";


//set app

const app = express();
app.use(express.json());
app.use(cors());

// connect to db

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hanaficars_users"
});

// api time

const today = Date.now();
 
const todayFa = {
    "day" : getDateFormat(today , {"day" : "2-digit"}),
    "month" : getDateFormat(today , {"month" : "numeric"}),
    "monthTitle" : getDateFormat(today , {"month" : "long"}),
    "year" : getDateFormat(today , {"year" : "numeric"}),
    "dayWeek" : getDateFormat(today , {"weekday" : "long"}),
}
 
function getDateFormat(uDate,option){
    let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
    return date;
} 

// api get

app.get('/date' , (req , res) => {
    return res.json(todayFa)
});

app.get('/cars' , (req , res) => {
    const q = 'SELECT * FROM cars';
    db.query(q , (err , data) => {
        if(err) return res.send(err);
        return res.json(data)
    })
});
app.get('/carname' , (req , res) => {
    const q = 'SELECT * FROM carname';
    db.query(q , (err , data) => {
        if(err) return res.send(err);
        return res.json(data)
    })
});
app.get('/karshenas' , (req , res) => {
    const q = 'SELECT * FROM karshenas';
    db.query(q , (err , data) => {
        if(err) return res.send(err);
        return res.json(data)
    })
});


//api post 

app.post("/cars", (req , res)=>{
    const q = "INSERT INTO cars (`karshenasName`,`mahalKarshenasi`,`malek`,`phoneNumber`,`moaref`,`carName`,`shasi`,`pelak`,`pelak2`,`pelak3`,`pelak4`,`price`,`text`,`textKarshenas`) VALUES (?)";
    const values = [
        req.body.karshenas ,
        req.body.mahal ,
        req.body.malek ,
        req.body.phoneNumber ,
        req.body.moarefSelect ,
        req.body.nameMachine ,
        req.body.shasi ,
        req.body.pelak ,
        req.body.pelak2 ,
        req.body.pelak3 ,
        req.body.pelak4 ,
        req.body.hazine ,
        req.body.text ,
        req.body.textkarshenas
    ]
    db.query(q , [values] , (err , data) => {
        if(err) return res.send(err)
        return res.send("اطلاعات با موفقیت ذخیره شد")
    })
});


// api connection on 8080
app.listen(8080 , ()=> {
    console.log("api run in port 8080 ...");
})



 
