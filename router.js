const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function createDatabase(){
    MongoClient.connect(url+'myshopdb', function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });
} 

function createCollections(){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("myshopdb");
      dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    }); 
}

function userRegister(username, email, password){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("myshopdb");
      var myobj = { username: username, email: email, password: password };
      dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("Inserted", myobj);
        db.close();
      });
    }); 
}

function viewCollection(){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("myshopdb");
      dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
      });
    }); 
}



//for html
function home()
{
    //for css
    app.use(express.static('public')); //inline
    //displaying html requested page
    app.get('/', function (req, res) {
        res.render('index', {name: "hellooooo", error: null});
    })

    app.get('/get_signed_user',(req,res)=>{
    //res.sendFile(__dirname +"/views/test.html",);
    res.json({username:"api"});
})


    app.post('/html/login_page.html', function (req, res) {
      console.log("post login_page.html called", req.body)
      return res.redirect('/html');
    });

    app.post('/html/registration_page.html', function (req, res) {
      console.log("post registration_page.html called")
      userRegister(req.body.username, req.body.email, req.body.password)
      return res.redirect('/html');
    });

    //displaying form response
    app.post('/', function (req, res) {
      var message = req.body.city;
      console.log(req.body.city);
    })
    
    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
}
module.exports.home = home;