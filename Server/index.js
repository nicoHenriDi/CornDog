const express = require('express');
const bodyParser =require('body-parser');
const cors = require("cors");
const app = express();
const mysql =require("mysql");

const accountSid = "ACdba4bb18056cfb75be81ecd8d6379784";
const authToken = "218a00d5030ccd873729af924775998c";
const client = require('twilio')(accountSid, authToken);

//for Database 
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'corndog'
});
//for Database 

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert",(req,res)=>{

    const formLastName =req.body.formLastName;
    const formName =req.body.formName;
    const formAdresse =req.body.formAdresse;
    const formTelephone =req.body.formTelephone;
    const formEmail=req.body.formEmail;

    const sqlInsert = "INSERT INTO commandecorndog (nomClient, prenomClient, adresseClient, telephoneClient,emailClient) VALUES (?,?,?,?,?)";
    db.query(sqlInsert,[formLastName,formName,formAdresse,formTelephone,formEmail], (err,result)=>{
        console.log(result);
    });

    //Api envoi SMS Client 

    const telephoneString =formTelephone;
    const nameString =formName;
    const lastNameString =formLastName;
    const adresseString =formAdresse;

    const textSms="Hello"+" "+
    "Parfait votre commande a bien ete pris en compte"+" \n"+
    "Voici les informations relative a cette derniere :"+" \n"+
    "Prénom Client :"+" "+nameString+" \n"+
    "Nom Client :"+" "+lastNameString+" \n"+
    "Numéro Commande :"+" "+"Ref:000104112022"+" \n"+
    "Adresse de Livraison :"+" "+adresseString;
    
    client.messages.create({
        body: textSms,
        from:"+18583302085",
        to:telephoneString
    }).then(message => console.log(message.sid));

});


app.listen(3001,()=>{
    console.log("le serveur est bien lancer");
});