const express = require('express')
const app = express()
const port = 3000
const bcrypt =  require('bcrypt-nodejs');
const pug = require('pug');
const path = require("path");
var {formdataSchema} = require('./model');
var mongoose = require('mongoose')

app.use(express.urlencoded());

// For serving static files
app.use(express.static('public'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views',path.join(__dirname, 'views'))


// DEFINING VARIABLE
let db_formdata_set

async function fetchdata(client){
  formdataSchema.find({}, (err, items) => {
    if (err) {
      console.log(err);
    }
    else {
       db_formdata_set = items

    }
  });
}

async function main(){
  const uri = "mongodb+srv://mohitchaudhary08:minda999@portfolio-cluster.jbtrq.mongodb.net/portfolio?retryWrites=true&w=majority";
  mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
      console.log('connected')
      fetchdata()
    });
}

main().catch(console.error);

// RENDARING MAIN PAGE

app.get('/', (req, res) => {
  console.log("database formdata :-")
  console.log(db_formdata_set)
  res.render('index')
  })

app.post('/', (req, res) => {
    data  = req.body
    if (req.body.name === ''){
      console.log("please enter details correctly")
    }else{
    console.log(data)
    const { name, lastname, phone, email, address, password, city, car, destination,roundtrip } = req.body;
    var passwordHash = bcrypt.hashSync(password);
    formdataSchema.create({
            Name: name,
            lastName: lastname,
            Email: email,
            Phone: phone,
            Address: address,
            Password: passwordHash,
            City: city,
            Car: car,
            Destination: destination,
            roundtrip: roundtrip,
        }).then(data => {
        if (data) {
             res.redirect('/')
             console.log("data saved in database ");
        }
        else
        res.status(500).json({ 'success': false, msg: "data not saved in database" });
        console.log("data not saved in database ");
    })
    .catch(err => {
        console.log(err)
    })}
   })
   
app.listen(port, () => {
    console.log(`form app listening at http://localhost:${port}`)
  })


