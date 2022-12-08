const express = require('express');
const bodyParser =require('body-parser');
const cors = require("cors");
const app = express();
const mysql =require("mysql");

// const accountSid = "ACdba4bb18056cfb75be81ecd8d6379784";
// const authToken = "218a00d5030ccd873729af924775998c";
// const client = require('twilio')(accountSid, authToken);


const {Vonage} = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: "92ad8771",
  apiSecret: "uHegZJkiyXhpbj9n"
})

//for Database 
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'corndog'
});
//for Database 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert",(req,res)=>{

    const formLastName =req.body.form.formLastName;
    const formName =req.body.form.formName;
    const formAdresse =req.body.form.formAdresse;
    const formTelephone =req.body.form.formTelephone;
    const formEmail=req.body.form.formEmail;
    const produitCommander=req.body.form.produitCommander;
    const listProduit =JSON.stringify(produitCommander); //récupération liste commande et convertion en fichier JSON
    // const listProduit =req.body.form.listProduit;

    
    // console.log("c'est là E : "+formEmail);

    const sqlInsert = "INSERT INTO commandecorndog (nomClient, prenomClient, adresseClient, telephoneClient,emailClient,produitCommander) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert,[formLastName,formName,formAdresse,formTelephone,formEmail,listProduit], (err,result)=>{
        console.log(result);
    });

    //Api envoi SMS Client 

    const telephoneString =formTelephone;
    const nameString =formName;
    const lastNameString =formLastName;
    const adresseString =formAdresse;
    // const listProduitString =listProduit;

    // const textSms="Hello"+" "+
    // "Parfait votre commande a bien ete pris en compte"+" \n"+
    // "Voici les informations relative a cette derniere :"+" \n"+
    // "Prénom Client :"+" "+nameString+" \n"+
    // "Nom Client :"+" "+lastNameString+" \n"+
    // "Numéro Commande :"+" "+"Ref:000104112022"+" \n"+
    // "Adresse de Livraison :"+" "+adresseString;
    
    // client.messages.create({
    //     body: textSms,
    //     from:"+18583302085",
    //     to:telephoneString//pour le moment il n'y a que le numéro enregistrer sur twilio qui marche
    //                       //il faut faire une prescription pour pouvoir avoir d'autres numéro
    // }).then(message => console.log(message.sid));


    // const from = "Vonage APIs"
    // const to = telephoneString
    // const text = "Hello"+" "+
    // "Parfait votre commande a bien ete pris en compte"+" \n"+
    // "Voici les informations relative a cette derniere :"+" \n"+
    // "Prénom Client :"+" "+nameString+" \n"+
    // "Nom Client :"+" "+lastNameString+" \n"+
    // "Numéro Commande :"+" "+"Ref:000104112022"+" \n"+
    // "Adresse de Livraison :"+" "+adresseString;

    // async function sendSMS() {
    //     await vonage.sms.send({to, from, text})
    //         .then(resp => { console.log('Message sent successfully'); console.log(resp); })
    //         .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
    // }
    
    // sendSMS();

});

app.post("/api/insertProduit",(req,res)=>{

    const formNomProduit = req.body.form.formNomProduit;
    const PrixProduit = req.body.form.PrixProduit;
    const formDescriptionProduit = req.body.form.formDescriptionProduit;
    const formStatutProduit = req.body.form.formStatutProduit;
    const ImageProduit = req.body.form.ImageProduit;


    const sqlInsert = "INSERT INTO produitscorn (produitName, price, descriptionProduit, imageProduit, Statut) VALUES (?,?,?,?,?)";
    db.query(sqlInsert,[formNomProduit,PrixProduit,formDescriptionProduit ,ImageProduit,formStatutProduit], (err,result)=>{
        console.log(result);
    });
});


app.listen(3001,()=>{
    console.log("le serveur est bien lancer");
});