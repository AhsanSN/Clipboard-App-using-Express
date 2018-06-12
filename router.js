const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
const database = require('./database');


// //db connection
//const mysql = require('mysql');
// function establishConnection()
// {
//     var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'sampleDB'
//     });

//     connection.connect(function(error){
//     if(error){
//         console.log("error");
//     }
//     else{
//         console.log("connection successfull");
//     }
//     });
// }

// function addToDb(message)
// {
//     establishConnection();
//     app.get('/',function (req, resp){
//     connection.query("SELECT * FROM sampletable", function(error, rows, fields){
//         if(error){
//         console.log("error in query");
//     }
//     else{
//         console.log("query successfull");
//         console.log(rows[0].name);
//         resp.send("hello"+rows[0].name);    
//     }
//     }); 
//     });
// }
//for html
function home()
{
    //for css
    app.use(express.static('public')); //inline

    //displaying html requested page
    app.get('/', function (req, res) {
      //res.send('Hello World!');
      //res.render('index');
      res.render('index', {Name: null, error: null});
    })

    //displaying form response
    app.post('/', function (req, res) {
      //res.render('index');
      var cityName = req.body.city;
      console.log(req.body.city);

      //sending data to index file with 
      if(cityName != ''){
        //add to database
        database.addToDb(cityName);
        res.render('index', {Name: cityName, error: null});
      }
    })
    

    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
}
module.exports.home = home;