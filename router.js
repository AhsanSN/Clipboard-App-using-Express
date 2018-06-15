const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
const database = require('./database');

//for html
function home()
{
    //for css
    app.use(express.static('public')); //inline
    //displaying html requested page
    app.get('/', function (req, res) {
        res.render('index', {Name: null, error: null});
    })

    app.get('/noticeboard', function (req, res) {
      
      var messageArray = database.selectFromDb(function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log("result from db is : ",data);  
            res.render('noticeboard', {messages: data, error: null});
        }  });

    });

    //displaying form response
    app.post('/', function (req, res) {
      var message = req.body.city;
      console.log(req.body.city);

      //sending data to index file with 
      if(message != ''){
        //add to database
        database.addToDb(message);
        res.render('index', {Name: message, error: null});
      }
    })
    
    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
}
module.exports.home = home;