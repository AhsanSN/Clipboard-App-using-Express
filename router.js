const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs')

//for html
function home()
{
    //for css
    app.use(express.static('public')); //inline

    //displaying html requested page
    console.log("h2")
    app.get('/', function (req, res) {
      //res.send('Hello World!');
      //res.render('index');
      console.log("h1")
      res.render('index', {Name: null, error: null});
    })
    //displaying form response
    app.post('/', function (req, res) {
      //res.render('index');
      var cityName = req.body.city;
      console.log(req.body.city);

      //sending data to index file with 
      if(cityName != ''){
        res.render('index', {Name: cityName, error: null});
      }else
      {
        res.render('index', {Name: null, error: null});
      }
    })

    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
}
module.exports.home = home;