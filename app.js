const express = require('express');
const path =require('path');
const fs=require('fs')
const bodyparser=require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
let port = '80';

const contactSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    DanceForm: String,
    Contact: Number,
    Email: String
  });


  const Contact = mongoose.model('Contact', contactSchema);





//EXPRESS STUFF
app.use('/static',express.static('static'));   //for static file
app.use(express.urlencoded());


//PUG STUFF
app.set('view engine', 'pug');  //set the template engine as pug
app.set('views', path.join(__dirname, 'views') );   //set the views directory


//ENDPOINTS
app.get('/', (req, res)=>{
    const param ={};
    res.status(200).render('home.pug', param);
});

app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
})
app.post('/contact', (req, res)=>{
   var myData= new Contact(req.body);
   myData.save().then(()=>{
       res.send("saved")
   }).catch(()=>{
       req.status(400).send("Not saved")
   });
})


//SERVER
app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
  
})

